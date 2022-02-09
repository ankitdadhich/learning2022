import { shallow } from 'enzyme';
import HomePage from './Home';
import * as reactRedux from 'react-redux'

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
})

describe(('Home Page render'), () => {
    it('Call dispatch Method', () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch);
        expect(dummyDispatch).not.toHaveBeenCalled()
    });

    it('render table with records', () => {
        const tableData = [
            {
                "id": 1,
                "name": "Ankit",
                "startLocation": "New York",
                "endLocation": "Beijing"
            },
            {
                "id": 2,
                "name": "Bobby",
                "startLocation": "New Jersey",
                "endLocation": "Boston"
            },
            {
                "id": 3,
                "name": "Jacky",
                "startLocation": "London",
                "endLocation": "Paris"
            }
        ]

        useSelectorMock.mockReturnValue(tableData);
        
        shallow(<HomePage />);
    })
})
