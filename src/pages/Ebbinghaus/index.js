import React from 'react'
import ReactDOM from 'react-dom';
import style from './index.less';
import { Router, Route, Link } from 'react-router-dom';
import { Form, Layout, Input, Button, Timeline, Icon, Table, Calendar, Badge, DatePicker } from 'antd';
import { format } from 'path';
import moment from 'moment';

const FormItem = Form.Item;
const {Header, Footer, Sider, Content} = Layout;

class Ebbinghaus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            taskCount: 0,
            columns:[],
            dataSource:[]
        };
        this.tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 4,
                    offset: 0,
                },
                sm: {
                    span: 4,
                    offset: 5,
                },
            },
        };
    }
    componentDidMount() {
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let taskList = values.taskContent.split(',');
                this.calculate(values.taskCount, taskList);
            }
        });
    }
    /* 计算任务计划 */
    calculate = (length, taskList) => {
        let result = [];
        let dataSource = [];
        let columns = [{
            title: '任务名称',
            dataIndex: 'name',
            key: 'name'
        }];
        /* 生成columns */
        for (let i = 0; i < Number(length) + 15; i++){
            result.push([]);
            columns.push({
                title: i + 1,
                dataIndex: i,
                key: 'c'+i,
                render: (text, record, index) => (
                    text === 1 ? <Icon type="star" theme="twoTone" />:null
                )
            })
        }
        /* 生成result数组 用于渲染timeline */
        taskList.map((task,index)=>{
            result[index + 0].push(task); // 开始
            result[index + 1].push(task); // 1天
            result[index + 2].push(task); // 2天
            result[index + 4].push(task); // 4天
            result[index + 7].push(task); // 7天
            result[index + 15].push(task); // 15天

            /* 生成dataSource 用于渲染表格 */
            dataSource[index]={
                key: '任务' + (index + 1),
                name: '任务' + (index + 1)
            };
            result.map((r,i)=>{
                dataSource[index][i] = 0;
                if (r.includes(task)){
                    dataSource[index][i] = 1;
                }
            })
        })
        this.setState({
            result,
            columns,
            dataSource
        })
    }
    /* 根据日期定义待办事项数组 */
    getListData = (value) => {
        let listData = [];
        let startDate = new Date(this.state.startDate);
        let thisData = new Date(value.format('YYYY-MM-DD'));
        let currentDate;
        if(startDate<=thisData){
            currentDate = (thisData - startDate)/(1000*3600*24);
        }
        this.state.result.map((r,i)=>{
            if (currentDate === i){
                r.map(item=>{
                    listData.push({
                        type: 'success', 
                        content: item
                    })
                })
            }
        })
        return listData || [];
    }
    /* 渲染待办事项列表 */
    dateCellRender=(value)=> {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {
                    listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))
                }
            </ul>
        );
    }
    /* 日期选择 */
    startDateOnChange = (date, dateString)=>{
        this.setState({
            startDate: dateString
        })
    }
    render() {
        const { result, columns, dataSource, startDate } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.content}>
                <Button type='primary'><Link to='/'>首页</Link></Button>
                <Layout>
                    <Header><h1>Ebbinghaus</h1></Header>
                    <Layout>
                        <Sider width={400}>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem 
                                    label="任务数量" 
                                    labelCol={{ span: 5 }} 
                                    wrapperCol={{ span: 15 }}
                                    extra="请输入任务数量（数字）"
                                >
                                    {getFieldDecorator('taskCount')(
                                        <Input/>
                                    )}
                                </FormItem>
                                <FormItem 
                                    label="任务内容" 
                                    labelCol={{ span: 5 }} 
                                    wrapperCol={{ span: 15 }}
                                    extra="请输入任务内容，以逗号分隔开"
                                >
                                    {getFieldDecorator('taskContent')(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    label="开始日期"
                                    labelCol={{ span: 5 }}
                                    wrapperCol={{ span: 15 }}
                                    extra="请输入任务计划开始的日期"
                                >
                                    {getFieldDecorator('startDate')(
                                        <DatePicker onChange={this.startDateOnChange}/>
                                    )}
                                </FormItem>
                                <FormItem {...this.tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" className="login-form-button">计算</Button>
                                </FormItem>
                            </Form>
                        </Sider>
                        <Content>
                            <h1>结果：</h1>
                            <Timeline style={{ display: 'block' }}>
                                {result.map((item, index) => {
                                    item = item.join('，');
                                    let resultDate = new Date(startDate);
                                    resultDate.setDate(resultDate.getDate() + index);
                                    let displayDate = moment(resultDate).format('YYYY-MM-DD');
                                    return <Timeline.Item key={index}>第{index + 1}天，{displayDate}：{item}</Timeline.Item>
                                })}
                            </Timeline>
                        </Content>
                    </Layout>
                </Layout>
                <Table 
                    columns={columns} 
                    dataSource={dataSource} 
                    pagination={false}
                />
                <Calendar 
                    dateCellRender={this.dateCellRender} 
                    // monthCellRender={this.monthCellRender} 
                />
            </div>
        )
    }
}
const WrappedEbbinghausForm = Form.create()(Ebbinghaus);
// ({ basicSetting }) => ({ basicSetting })) (Form.create()(basicSetting)
// ReactDOM.render(<WrappedEbbinghausForm />, mountNode);
export default  WrappedEbbinghausForm;