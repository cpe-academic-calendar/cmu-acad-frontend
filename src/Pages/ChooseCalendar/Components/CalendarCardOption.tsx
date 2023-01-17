import React from "react";
import styled from "styled-components";

// type buttonProps = {
//     clickHandle: ()=> void
// }

const CalendarCardOption :React.FC = () => {
    return ( <>
        <Modal>
            <DraftOption>
                <div>
                    <p>ทำซ้ำ</p>
                </div>
                <div>
                    <p>นำออก</p>
                </div>
                <div>
                    <p>จัดเก็บ</p>
                </div>
                <div>
                    <p className='delete'>ลบ</p>
                </div>
            </DraftOption>
        </Modal>
    </> );
}

const DraftOption = styled.div`
    align-items: center;
    background-color: var(--background);
    color: #000;
    font-size: medium;
    display: flex;
    flex-direction: column;
    padding: 8px;
    .delete{
        color: var(--error)
    }
    p{
        margin: 2px;
    }
`

const Modal = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 4px;
    padding-bottom: 4px;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`
 
export default CalendarCardOption;