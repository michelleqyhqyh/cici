package com.eline.ai.receipt.recognition.biz.service;

import com.eline.ai.receipt.recognition.biz.model.CallbackRequest;

/**
 * 回调接口
 *
 * @author: qiaoyanhua
 * @date: 2026/3/25 16:14
 */
public interface CallbackService {


    /**
     * 发起回调（主入口）
     *
     * @param request 回调参数
     */
    void doCallback(CallbackRequest request);

}