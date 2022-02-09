import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
})

describe(('render Edit Page'), () => {
    
    it('When save changes', () => {
        const requestedData = {
            "id": 1,
            "name": "Ankit",
            "startLocation": "New York",
            "endLocation": "Beijing"
        }
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch);
        expect(dummyDispatch).not.toHaveBeenCalledWith(requestedData)
    })
})
