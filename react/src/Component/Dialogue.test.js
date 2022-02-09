import AlertDialog from './Dialogue';
import { shallow } from 'enzyme';

const defaultProps = {
    isOpen: false,
    selectedData: {},
    handleDeleteRecord: jest.fn(),
    handleCloseDialogue: jest.fn(),
  };

describe('Dialogue', () => {
    it('render without error',() => {
        shallow(<AlertDialog {...defaultProps}/>)
    });

    it('open successfully dialogue',() => {
        const isOpen = true;
        const selectedData = {
            "id": 1,
            "name": "Ankit",
            "startLocation": "New York",
            "endLocation": "Beijing"
        }
        shallow(<AlertDialog isOpen={isOpen} selectedData={selectedData} />)
    })

    it('not open dialogue',() => {
        const isOpen = false;
        const selectedData = {
            "id": 1,
            "name": "Ankit",
            "startLocation": "New York",
            "endLocation": "Beijing"
        }
        shallow(<AlertDialog isOpen={isOpen} selectedData={selectedData}  />)
    })

})