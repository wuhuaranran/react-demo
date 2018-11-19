// import request from 'utils/request';

const changeData = res => ({
    type: 'CHANGE_DATA',
    payload: res
});

const changeDemoListData = data => ({
    type: "CHANGE_DEMODATA",
    payload: data
});
const initState = {
    demoData: '测试测试',
    demoList: []
};
export const changeDataReq = params => async (dispatch) => {
    // try {
    //     const result = await request('/api/qq/changeData', {
    //         method: 'POST',
    //         data: params
    //     });
    //     await dispatch(changeData(result.data));
    // } catch (error) {
    //     //
    // }
};

export const handleAction = params => (dispatch) => {
    dispatch(changeDataReq(params));
};

export const getDemoListData = () => (dispatch) => {
    const list = [
        {
            img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
            title: '1----Meet hotel',
            des: '不是所有的兼职汪都需要风吹日晒',
        }
    ];
    setTimeout(() => {
        dispatch(changeDemoListData(list));
    }, 1000);
}


export default function routeTestReducer(state = initState, action) {
    let demoData = action.payload;
    let { type } = action;
    switch (type) {
        case 'CHANGE_DATA':
            return { ...state, demoData };
        // break;
        case 'CHANGE_DEMODATA':
            return {
                ...state,
                demoList: [
                    ...state.demoList,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}