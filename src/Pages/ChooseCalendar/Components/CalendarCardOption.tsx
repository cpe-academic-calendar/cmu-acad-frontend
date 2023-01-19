import { useState } from 'react'
import DuplicatePopUp from './DuplicatePopUp'
import styled from 'styled-components'
// type buttonProps = {
//     clickHandle: ()=> void
// }

const CalendarCardOption: React.FC = () => {
    const [duplicate, setDuplicate] = useState(false)

    const handleDuplicate = () => {
        setDuplicate(true)
    }

    return (<>
        <Modal className='z-20'>
            <DraftOption>
                <div className="hover:bg-gray-200">
                    <button onClick={handleDuplicate}>ทำซ้ำ</button>
                </div>
                <div className="hover:bg-gray-200">
                    <button onClick={() => exportHandle}>นำออก</button>
                </div>
                <div className="hover:bg-gray-200">
                    <button onClick={() => archiveHandle}>จัดเก็บ</button>
                </div>
                <div className="hover:bg-gray-200">
                    <button onClick={() => deleteHandle} className='delete '>ลบ</button>
                </div>
            </DraftOption>
        </Modal>
        <div>
            {duplicate ? (
                <div>
                    {DuplicatePopUp()}
                </div>
            ) : null}
        </div>
    </>);
}

const Duplicate = styled.div`
`

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
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`
export default CalendarCardOption;