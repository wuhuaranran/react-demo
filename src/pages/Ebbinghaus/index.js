import React from 'react'
import ReactDOM from 'react-dom';
import style from './index.less';
import { Form, Layout, Input, Button, Timeline, Icon, Table } from 'antd';

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
    calculate = (length, taskList) => {
        let result = [];
        let dataSource = [];
        let columns = [{
            title: '任务名称',
            dataIndex: 'name',
            key: 'name'
        }];
        for (let i = 0; i < Number(length) + 15; i++){
            result.push([]);
            columns.push({
                title: i + 1,
                dataIndex: i,
                key: i,
                render: (text, record, index) => (
                    text === 1 ? <Icon type="star" theme="twoTone" />:null
                )
            })
        }
        taskList.map((task,index)=>{
            result[index + 0].push(task); // 开始
            result[index + 1].push(task); // 1天
            result[index + 2].push(task); // 2天
            result[index + 4].push(task); // 4天
            result[index + 7].push(task); // 7天
            result[index + 15].push(task); // 15天
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
    render() {
        const { result, columns, dataSource } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.content}>
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
                                <FormItem {...this.tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" className="login-form-button">计算</Button>
                                </FormItem>
                            </Form>
                        </Sider>
                        <Content>
                            <h1>结果：</h1>
                            <Timeline>
                                {result.map((item, index) => {
                                    item = item.join('，');
                                    return <Timeline.Item key={index}>第{index + 1}天：{item}</Timeline.Item>
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
            </div>
        )
    }
}
const WrappedEbbinghausForm = Form.create()(Ebbinghaus);
// ({ basicSetting }) => ({ basicSetting })) (Form.create()(basicSetting)
// ReactDOM.render(<WrappedEbbinghausForm />, mountNode);
export default  WrappedEbbinghausForm;