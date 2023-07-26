import React from "react";
import { HelpBlock } from "./Help.style";

const Help = () => {
  return (
    <HelpBlock>
      <div className="pBox">
        <p className="pInquiry">이메일 문의하기</p>
        <p className="pRequest">
          상품/배송 등 쇼핑 관련 문의는 고객센터 에서 요청해주세요.
        </p>
        <div>
          <form className="helpForm">
            <div className="helpDiv">
              <div className="helpinqurydiv">
                <select className="helpinqurySelect">
                  <option value="" disabled>
                    문의 유형
                  </option>
                  <option value="0">회원정보 문의</option>
                  <option value="1">쿠폰/포인트 문의</option>
                  <option value="2">주문/결제 관련 문의</option>
                  <option value="3">취소/환불 관련 문의</option>
                  <option value="4">배송 관련 문의</option>
                  <option value="5">주문 전 상품 정보 문의</option>
                  <option value="6">서비스 개선 제안</option>
                  <option value="7">시스템 오류 제보</option>
                </select>
              </div>
              <span>앱 개선 제안은 '서비스 개선 제안'으로 선택해 주세요.</span>
              <span>앱 장애 신고는 '시스템 오류 제보'로 선택해 주세요.</span>
            </div>
            <div className="helpDiv">
              <div>
                <input name="name" placeholder="이름"></input>
              </div>
            </div>
            <div className="helpDiv">
              <div>
                <input name="name" placeholder="이메일"></input>
              </div>
            </div>
            <div className="helpDiv">
              <input name="name" placeholder="제목"></input>
            </div>
            <div className="helpDiv">
              <textarea
                name="message"
                maxlength="500"
                placeholder="문의내용"></textarea>
            </div>
            <div className="helpDiv">
              <div>
                <input type="file" name="file" hidden></input>
              </div>
            </div>
            <div className="helpAgreeDiv">
              <div>
                <div>
                  <input type="checkbox" name="checkbox"></input>
                </div>

                <label className="helpAgreelabel">
                  개인정보 수집 및 이용동의
                </label>
                <p className="helpAgreeP">
                  1. 수집하는 개인정보 항목 : 이름, 이메일
                  <br></br>
                  2. 수집 목적 : 문의자 확인, 문의에 대한 회신 등의 처리
                  <br></br>
                  3. 보유 기간 : 목적 달성 후 파기, 단, 관계법령에 따라 또는
                  회사 정책에 따른 정보보유사유가 발생하여 보존할 필요가 있는
                  경우에는 필요한 기간 동안 해당 정보를 보관합니다. 전자상거래
                  등에서의 소비자 보호에 관한 법률, 전자금융거래법,
                  통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는
                  경우, 이 기간 동안 법령의 규정에 따라 개인정보를 보관하며,
                  다른 목적으로는 절대 이용하지 않습니다. (개인정보처리방침
                  참고)
                  <br></br>
                  4. 귀하는 회사의 정보수집에 대해 동의하지 않거나 거부할 수
                  있습니다. 다만, 이때 원활한 문의 및 서비스 이용 등이 제한될 수
                  있습니다.
                </p>
              </div>
              <button className="helpSubmitButton">제출하기</button>
            </div>
          </form>
        </div>
      </div>
    </HelpBlock>
  );
};

export default Help;
