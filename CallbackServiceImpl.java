package com.eline.ai.receipt.recognition.biz.service.impl;

import com.alibaba.fastjson2.JSON;
import com.eline.ai.receipt.recognition.biz.model.CallbackRequest;
import com.eline.ai.receipt.recognition.biz.service.CallbackService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
public class CallbackServiceImpl implements CallbackService {

    private static final int MAX_RETRY = 3;

    @Override
    public void doCallback(CallbackRequest request) {

        int round = request.getCallbackRound() == null ? 0 : request.getCallbackRound();

        while (round < MAX_RETRY) {
            round++;

            log.info("开始第{}次回调 requestNo={}", round, request.getRequestNo());

            try {

                // 1. 构造请求体
                Map<String, Object> body = buildRequestBody(request);

                // 2. 发起HTTP请求（你可以换成HttpUtils / OkHttp）
                String response = doPost(request.getCallbackUrl(), body);

                // 3. 判断是否成功
                if (isSuccess(response)) {
                    log.info("回调成功 requestNo={}", request.getRequestNo());

                    // 更新DB：callback_status=1
                    updateCallbackStatus(request, 1, round, "回调成功");

                    // 写日志
                    saveLog(request, response, true);

                    return;
                }

                // 非200也算失败
                log.warn("回调失败（业务失败） response={}", response);

            } catch (Exception e) {
                log.error("回调异常 requestNo={}", request.getRequestNo(), e);
            }

            // 失败逻辑
            updateCallbackStatus(request, 2, round, "回调重试中");

            // 写日志
            saveLog(request, "失败", false);

        }

        // 超过最大重试次数
        log.error("回调最终失败 requestNo={}", request.getRequestNo());

        updateCallbackStatus(request, 3, round, "回调失败（超过最大重试次数）");

        saveLog(request, "最终失败", false);
    }

    /**
     * 构造回调参数
     */
    private Map<String, Object> buildRequestBody(CallbackRequest request) {

        Map<String, Object> map = new HashMap<>();
        map.put("receipt_type_code", request.getReceiptTypeCode());
        map.put("request_no", request.getRequestNo());
        map.put("request_time", request.getRequestTime());
        map.put("file_status", request.getFileStatus());
        map.put("task_status", request.getTaskStatus());
        map.put("result", request.getResult());
        map.put("fail_reason", request.getFailReason());
        map.put("sign", request.getSign());

        return map;
    }

    /**
     * HTTP POST
     */
    private String doPost(String url, Map<String, Object> body) {

        // 推荐你用 Hutool 或 OkHttp
        // 这里给一个简单写法（伪代码）

        return cn.hutool.http.HttpRequest.post(url)
                .header("Content-Type", "application/json")
                .body(JSON.toJSONString(body))
                .timeout(5000)
                .execute()
                .body();
    }

    /**
     * 判断是否成功（code=200）
     */
    private boolean isSuccess(String response) {

        try {
            Map map = JSON.parseObject(response, Map.class);
            Object code = map.get("code");
            return code != null && Integer.parseInt(code.toString()) == 200;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * 更新回调状态（你需要对接DB）
     */
    private void updateCallbackStatus(CallbackRequest request,
                                      int status,
                                      int round,
                                      String msg) {

        log.info("更新DB状态 status={}, round={}, msg={}", status, round, msg);

        // TODO:
        // update o_receipt_recognition 表
        // callback_status / callback_round
    }

    /**
     * 写回调日志
     */
    private void saveLog(CallbackRequest request,
                         String response,
                         boolean success) {

        log.info("写回调日志 success={}, response={}", success, response);

        // TODO:
        // insert into o_receipt_recognition_callback_log
    }
}