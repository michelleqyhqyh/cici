package com.eline.ai.receipt.recognition.biz.domain.request;


import lombok.Data;

@Data
public class CallbackRequest {

    /**
     * 唯一请求编号
     */
    private String requestNo;

    /**
     * 单据类型
     */
    private String receiptTypeCode;

    /**
     * 解析最终状态
     * 2 = 成功
     * 3 = 失败
     */
    private Integer taskStatus;

    /**
     * 提取后的单据核心数据 JSON（成功时必传）
     */
    private String result;

    /**
     * 错误原因（失败时必传）
     */
    private String failReason;

    /**
     * 生成签名字符串（固定顺序）
     */
    public String getSignContent() {
        StringBuilder sb = new StringBuilder();
        // 固定顺序拼接，只拼非空
        if (requestNo != null) sb.append(requestNo);
        if (receiptTypeCode != null) sb.append(receiptTypeCode);
        if (taskStatus != null) sb.append(taskStatus);
        if (result != null) sb.append(result);
        if (failReason != null) sb.append(failReason);
        return sb.toString();
    }

}
