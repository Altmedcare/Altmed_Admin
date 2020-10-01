import React, {Component, PureComponent} from 'react';
import {connect} from 'dva';
import {formatMessage, FormattedMessage} from 'umi-plugin-react/locale';
import {
    Row,
    Col,
    Form,
    Input,
    DatePicker,
    Select,
    Button,
    Card,
    InputNumber,
    Radio,
    Icon,
    Tooltip, Upload, Modal, Tag, Popover, Table, Divider, Popconfirm, message,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';
import TableForm from "@/pages/Forms/TableForm";
import AwardForm from "@/pages/Doctors/AwardForm";

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1143459_fr9yng3c0v6.js',
});
const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;
const {TextArea} = Input;

@connect(({loading}) => ({
    submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class DoctorView extends Component {
    cacheOriginData = {};

    constructor(props) {
        super(props);
        this.state = {
            personalDetails: true,
            stage: [{hospital: '', start: '', end: '', position: ''}],
            specialization: [],
            award: [],
            awardData: [
                {
                    key: '1',
                    workId: 'Description',
                    name: 'Name',
                    editable: false
                },

            ],
            specializationData: [
                {
                    key: '1',
                    workId: 'Description',
                    name: 'Name',
                    editable: false
                },

            ],
            uploadsData: [
                {
                    key: '1',
                    file: '1',
                    workId: '2',
                    name: '3',
                    type: '4 ',
                    editable: false
                },

            ],
            registrationData: [
                {
                    key: '1',
                    number: '1',
                    name: '2',
                    date: '3',
                    editable: false
                },

            ],
            careerData: [
                {
                    key: '1',
                    started: '1',
                    name: '2',
                    ended: '3',
                    position: '3',
                    editable: false
                },

            ],
            educationData: [
                {
                    key: '1',
                    name: '1',
                    institute: '2',
                    state: '3',
                    place: '3',
                    university: '3',
                    joined: '3',
                    pass: '3',
                    editable: false
                },

            ],
            professionalData: [
                {
                    key: '1',
                    overall: '1',
                    specialize: '2',
                    editable: false
                },
            ],
            personalData: [
                {
                    key: '1',
                    name: '1',
                    email: '2',
                    dob: '2',
                    blood: '2',
                    address: '2',
                    editable: false
                },
            ],
        };
    }

    handleSubmit = e => {
        const {dispatch, form} = this.props;
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                dispatch({
                    type: 'form/submitRegularForm',
                    payload: values,
                });
            }
        });
    };
    addNewStage = e => {
        const stages = this.state.stage;
        stages.push({hospital: '', start: '', end: '', position: ''});
        this.setState({
            stage: stages
        })
    }

    addNewSpecialization = e => {

        const specialization = this.state.specialization;
        specialization.push({specializationTitle: '', description: ''});
        this.setState({
            specialization: specialization,
        });
    }

    getErrorInfo = () => {
        const {
            form: {getFieldsError},
        } = this.props;
        const errors = getFieldsError();
        const errorCount = Object.keys(errors).filter(key => errors[key]).length;
        if (!errors || errorCount === 0) {
            return null;
        }
        const scrollToField = fieldKey => {
            const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
            if (labelNode) {
                labelNode.scrollIntoView(true);
            }
        };
        const errorList = Object.keys(errors).map(key => {
            if (!errors[key]) {
                return null;
            }
            return (
                <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
                    <Icon type="cross-circle-o" className={styles.errorIcon}/>
                    <div className={styles.errorMessage}>{errors[key][0]}</div>
                    <div className={styles.errorField}>{fieldLabels[key]}</div>
                </li>
            );
        });
        return (
            <span className={styles.errorIcon}>
        <Popover
            title="Form verification information"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
        >
          <Icon type="exclamation-circle"/>
        </Popover>
                {errorCount}
      </span>
        );
    };

    getRowByKey(key, newData) {
        const data = this.state.awardData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    getEducationRowByKey(key, newData) {
        const data = this.state.educationData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    getCareerRowByKey(key, newData) {
        const data = this.state.careerData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    getRegistrationRowByKey(key, newData) {
        const data = this.state.registrationData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    getUploadRowByKey(key, newData) {
        const data = this.state.uploadsData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    getSpecializationRowByKey(key, newData) {
        const data = this.state.specializationData;
        return (newData || data).filter(item => item.key === key)[0];
    }
    getPersonalRowByKey(key, newData) {
        const data = this.state.personalData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    getProfessionalRowByKey(key, newData) {
        const data = this.state.professionalData;
        return (newData || data).filter(item => item.key === key)[0];
    }

    handleAwardChange = (e, fieldName, key) => {
        const data = this.state.awardData;
        const newData = data.map(item => ({...item}));
        const target = this.getRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({awardData: newData});
        }
    }
    handleProfessionalChange = (e, fieldName, key) => {
        const data = this.state.professionalData;
        const newData = data.map(item => ({...item}));
        const target = this.getProfessionalRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({professionalData: newData});
        }
    }
    handleSpecialChange = (e, fieldName, key) => {
        const data = this.state.specializationData;
        const newData = data.map(item => ({...item}));
        const target = this.getRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({specializationData: newData});
        }
    }
    handleUploadChange = (e, fieldName, key) => {
        const data = this.state.uploadsData;
        const newData = data.map(item => ({...item}));
        const target = this.getRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({uploadsData: newData});
        }
    }
    handleCareerChange = (e, fieldName, key) => {
        const data = this.state.careerData;
        const newData = data.map(item => ({...item}));
        const target = this.getCareerRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({careerData: newData});
        }
    }
    handleRegistrationChange = (e, fieldName, key) => {
        const data = this.state.registrationData;
        const newData = data.map(item => ({...item}));
        const target = this.getRegistrationRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({registrationData: newData});
        }
    }
    handleProfileChange = (e, fieldName, key) => {
        const data = this.state.personalData;
        const newData = data.map(item => ({...item}));
        const target = this.getPersonalRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({personalData: newData});
        }
    }
    handleEducationChange = (e, fieldName, key) => {
        const data = this.state.educationData;
        const newData = data.map(item => ({...item}));
        const target = this.getEducationRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({educationData: newData});
        }
    }
    toggleEditable = (e, key) => {
        e.preventDefault();
        const data = this.state.awardData;
        const newData = data.map(item => ({...item}));
        const target = this.getRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({awardData: newData});
        }
    };
    toggleEditablePersonal = (e, key) => {
        e.preventDefault();
        const data = this.state.personalData;
        const newData = data.map(item => ({...item}));
        const target = this.getPersonalRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({personalData: newData});
        }
    };
    toggleEditableRegistration = (e, key) => {
        e.preventDefault();
        const data = this.state.registrationData;
        const newData = data.map(item => ({...item}));
        const target = this.getRegistrationRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({registrationData: newData});
        }
    };
    toggleEditableSpecial = (e, key) => {
        e.preventDefault();
        const data = this.state.specializationData;
        const newData = data.map(item => ({...item}));
        const target = this.getRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({specializationData: newData});
        }
    };
    toggleEditableUploads = (e, key) => {
        e.preventDefault();
        const data = this.state.uploadsData;
        const newData = data.map(item => ({...item}));
        const target = this.getUploadRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({uploadsData: newData});
        }
    };
    toggleEditableCareer = (e, key) => {
        e.preventDefault();
        const data = this.state.careerData;
        const newData = data.map(item => ({...item}));
        const target = this.getCareerRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({careerData: newData});
        }
    };
    toggleEditableEducation = (e, key) => {
        e.preventDefault();
        const data = this.state.educationData;
        const newData = data.map(item => ({...item}));
        const target = this.getEducationRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({educationData: newData});
        }
    };
    toggleEditableProfessional = (e, key) => {
        e.preventDefault();
        const data = this.state.professionalData;
        const newData = data.map(item => ({...item}));
        const target = this.getProfessionalRowByKey(key, newData);
        if (target) {
            // 进入Edit状态时Preservation原始数据
            if (!target.editable) {
                this.cacheOriginData[key] = {...target};
            }
            target.editable = !target.editable;
            this.setState({professionalData: newData});
        }
    };

    newAward = () => {
        const data = this.state.awardData;
        const newData = data.map(item => ({...item}));
        newData.push({
            key: `NEW_TEMP_ID_${this.index}`,
            workId: '',
            name: '',
            department: '',
            editable: true,
            isNew: true,
        });
        this.index += 1;
        this.setState({awardData: newData});
    };
    newEducation = () => {
        const data = this.state.educationData;
        const newData = data.map(item => ({...item}));
        newData.push({
            key: `NEW_TEMP_ID_${this.index}`,
            name: '1',
            institute: '2',
            state: '3',
            place: '3',
            university: '3',
            joined: '3',
            pass: '3',
            editable: true,
            isNew: true,
        });

        this.index += 1;
        this.setState({educationData: newData});
    };
    newUploads = () => {
        const data = this.state.uploadsData;
        const newData = data.map(item => ({...item}));
        newData.push({
            key: `NEW_TEMP_ID_${this.index}`,
            file: '',
            workId: '',
            name: '',
            type: '',
            editable: true,
            isNew: true,
        });
        this.index += 1;
        this.setState({uploadsData: newData});
    };
    newCareer = () => {
        const data = this.state.careerData;
        const newData = data.map(item => ({...item}));
        newData.push({
            key: `NEW_TEMP_ID_${this.index}`,
            name: '',
            started: '',
            ended: '',
            position: '',
            editable: true,
            isNew: true,
        });
        this.index += 1;
        this.setState({careerData: newData});
    };
    newSpecialization = () => {
        const data = this.state.specializationData;
        const newData = data.map(item => ({...item}));
        newData.push({
            key: `NEW_TEMP_ID_${this.index}`,
            file: '',
            workId: '',
            name: '',
            type: '',
            editable: true,
            isNew: true,
        });
        this.index += 1;
        this.setState({specializationData: newData});
    };

    saveAward(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getRowByKey(key) || {};

            if (!target.workId || !target.name) {
                message.error('Please complete the Award information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditable(e, key);
            const data = this.state.awardData;
            // const {onChange} = this.props;
            // onChange(data);
            this.setState({
                loading: false,
                awardData: data,
            });
        }, 500);
    }
    savePersonal(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getPersonalRowByKey(key) || {};

            if (!target.name || !target.email|| !target.dob|| !target.blood|| !target.address) {
                message.error('Please complete the Award information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditablePersonal(e, key);
            const data = this.state.personalData;
            this.setState({
                loading: false,
                personalData: data,
            });
        }, 500);
    }

    saveCareer(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getCareerRowByKey(key) || {};

            if (!target.started || !target.name || !target.position || !target.ended) {
                message.error('Please complete the Award information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditableCareer(e, key);
            const data = this.state.careerData;
            this.setState({
                loading: false,
                careerData: data,
            });
        }, 500);
    }

    saveEducation(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getEducationRowByKey(key) || {};
            // name: '1',
            //     institute: '2',
            //     state: '3',
            //     : '3',
            //     university: '3',
            //     : '3',
            //     : '3',
            if (!target.institute || !target.name || !target.state || !target.place || !target.university || !target.joined || !target.pass) {
                message.error('Please complete the Award information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditableEducation(e, key);
            const data = this.state.educationData;
            this.setState({
                loading: false,
                educationData: data,
            });
        }, 500);
    }

    saveProfessional(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getProfessionalRowByKey(key) || {};

            if (!target.overall || !target.specialize) {
                message.error('Please complete the Award information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditableProfessional(e, key);
            const data = this.state.professionalData;
            this.setState({
                loading: false,
                professionalData: data,
            });
        }, 500);
    }

    saveSpectialization(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getSpecializationRowByKey(key) || {};

            if (!target.workId || !target.name) {
                message.error('Please complete the Spectialization information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditable(e, key);
            const data = this.state.specializationData;
            this.setState({
                loading: false,
                specializationData: data,
            });
        }, 500);
    }

    saveUploads(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getUploadRowByKey(key) || {};
            if (!target.workId || !target.name || !target.file || !target.type) {
                message.error('Please complete the Specialization information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditableUploads(e, key);
            const data = this.state.uploadsData;
            this.setState({
                loading: false,
                uploadsData: data,
            });
        }, 500);
    }

    saveRegistration(e, key) {
        e.persist();
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            if (this.clickedCancel) {
                this.clickedCancel = false;
                return;
            }
            const target = this.getRegistrationRowByKey(key) || {};
            if (!target.number || !target.name || !target.date) {
                message.error('Please complete the Registration information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditableRegistration(e, key);
            const data = this.state.registrationData;
            this.setState({
                loading: false,
                registrationData: data,
            });
        }, 500);
    }

    remove(key) {
        const data = this.state.awardData;
        const newData = data.filter(item => item.key !== key);
        this.setState({awardData: newData});
    }

    removeUploads(key) {
        const data = this.state.uploadsData;
        const newData = data.filter(item => item.key !== key);
        this.setState({uploadsData: newData});
    }

    removeCareer(key) {
        const data = this.state.careerData;
        const newData = data.filter(item => item.key !== key);
        this.setState({careerData: newData});
    }

    removeRegistration(key) {
        const data = this.state.registrationData;
        const newData = data.filter(item => item.key !== key);
        this.setState({registrationData: newData});
    }

    //@fun

    render() {
        const {submitting} = this.props;
        const {
            form: {getFieldDecorator, getFieldValue},
        } = this.props;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 7},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
                md: {span: 10},
            },
        };
        const submitFormLayout = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 10, offset: 7},
            },
        };
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file]
                }));
                return false;
            },
        };
        const awardColumns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleAwardChange(e, 'name', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Description',
                dataIndex: 'workId',
                key: 'workId',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleAwardChange(e, 'workId', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveAward(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.remove(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveAward(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancel(e, record.key)}><Button icon="minus-circle"/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditable(e, record.key)}><Button icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.remove(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const professionalColumns = [
            {
                title: 'Overall Experience',
                dataIndex: 'overall',
                key: 'overall',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleProfessionalChange(e, 'overall', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Overall Experience"
                            />
                        );
                    }
                    return text;
                },
            },

            {
                title: 'Specialized Experience',
                dataIndex: 'specialize',
                key: 'specialize',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleProfessionalChange(e, 'specialize', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Specialized Experience"
                            />
                        );
                    }
                    return text;
                },
            },

            {
                title: 'Action',
                key: 'action',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveProfessional(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.remove(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveProfessional(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancel(e, record.key)}><Button icon="minus-circle"/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableProfessional(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.remove(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const uploadsColumns = [
            {
                title: 'File',
                dataIndex: 'file',
                key: 'file',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleUploadChange(e, 'file', record.key)}

                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleUploadChange(e, 'name', record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },

            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleUploadChange(e, 'type', record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Description',
                dataIndex: 'workId',
                key: 'workId',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleUploadChange(e, 'workId', record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Action',
                key: 'action',
                width: '20%',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveUploads(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.removeUploads(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveUploads(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancelUploads(e, record.key)}><Button icon="minus-circle"/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableUploads(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeUploads(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const registrationColumns = [
            {
                title: 'Registration Number',
                dataIndex: 'number',
                key: 'number',
                width: '25%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleRegistrationChange(e, 'number', record.key)}

                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '25%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleRegistrationChange(e, 'name', record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },

            {
                title: 'Dated on',
                dataIndex: 'date',
                key: 'date',
                width: '25%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleRegistrationChange(e, 'date', record.key)}
                                placeholder="Dated on"
                            />
                        );
                    }
                    return text;
                },
            },

            {
                title: 'Action',
                key: 'action',
                width: '25%',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveRegistration(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?"
                              onConfirm={() => this.removeRegistration(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveRegistration(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancelUploads(e, record.key)}><Button icon="minus-circle"/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableRegistration(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeRegistration(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const specializationColumns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleSpecialChange(e, 'name', record.key)}
                                // onChange={e => this.handleFieldChange(e, 'name', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Description',
                dataIndex: 'workId',
                key: 'workId',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleSpecialChange(e, 'workId', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveSpectialization(e, record.key)}><Button icon="save"></Button></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.remove(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}></Button></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveSpectialization(e, record.key)}><Button icon="save"></Button></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancel(e, record.key)}><Button icon="minus-circle"
                                                                     style={{marginLeft: 8}}></Button></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableSpecial(e, record.key)}><Button
                  icon="edit"></Button></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.remove(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}></Button></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const careerColumns = [
            {
                title: 'Hospital/Clinic Name',
                dataIndex: 'name',
                key: 'name',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleCareerChange(e, 'name', record.key)}
                                // onChange={e => this.handleFieldChange(e, 'name', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Started On',
                dataIndex: 'started',
                key: 'started',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleCareerChange(e, 'started', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Ended On',
                dataIndex: 'ended',
                key: 'ended',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleCareerChange(e, 'ended', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Position',
                dataIndex: 'position',
                key: 'position',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleCareerChange(e, 'position', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveCareer(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.removeCareer(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveCareer(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancel(e, record.key)}><Button icon="minus-circle"
                                                                     style={{marginLeft: 8}}/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableCareer(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeCareer(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const educationColumns = [
            {
                title: 'Course/Program',
                dataIndex: 'name',
                key: 'name',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleEducationChange(e, 'name', record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Institute Name',
                dataIndex: 'institute',
                key: 'institute',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleEducationChange(e, 'institute', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Place',
                dataIndex: 'place',
                key: 'place',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleEducationChange(e, 'place', record.key)}
                                // onKeyPress={e => this.handleKeyPress(e, record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'State',
                dataIndex: 'state',
                key: 'state',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleEducationChange(e, 'state', record.key)}
                                placeholder="State"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'University',
                dataIndex: 'university',
                key: 'university',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleEducationChange(e, 'university', record.key)}
                                placeholder="University"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Joined on',
                dataIndex: 'joined',
                key: 'joined',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleEducationChange(e, 'joined', record.key)}
                                placeholder="Joined on"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Pass out on',
                dataIndex: 'pass',
                key: 'pass',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleEducationChange(e, 'pass', record.key)}
                                placeholder="Pass out on"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Action',
                key: 'action',
                width: '12.5%',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveEducation(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.removeCareer(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveEducation(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancel(e, record.key)}><Button icon="minus-circle"
                                                                     style={{marginLeft: 8}}/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableEducation(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeCareer(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];
        const personalColumns = [
            {
                title: 'Full Name',
                dataIndex: 'name',
                key: 'name',
                width: '16.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleProfileChange(e, 'name', record.key)}
                                placeholder="Name"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                width: '16.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleProfileChange(e, 'email', record.key)}
                                placeholder="Email"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'DOB',
                dataIndex: 'dob',
                key: 'dob',
                width: '16.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleProfileChange(e, 'dob', record.key)}
                                placeholder="DOB"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Blood Group',
                dataIndex: 'blood',
                key: 'blood',
                width: '16.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleProfileChange(e, 'blood', record.key)}
                                placeholder="Blood Group"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                width: '16.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleProfileChange(e, 'address', record.key)}
                                placeholder="Address"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Action',
                key: 'action',
                width: '16.5%',
                render: (text, record) => {
                    const {loading} = this.state;
                    if (!!record.editable && loading) {
                        return null;
                    }
                    if (record.editable) {
                        if (record.isNew) {
                            return (
                                <span>
                  <a onClick={e => this.saveEducation(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?" onConfirm={() => this.removeCareer(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.savePersonal(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancel(e, record.key)}><Button icon="minus-circle"
                                                                     style={{marginLeft: 8}}/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditablePersonal(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeCareer(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];

        return (
            <Card bordered={false}>
                <Form onSubmit={this.handleSubmit} hideRequiredMark style={{marginTop: 8}}>
                    <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Personal details</h2>
                    </div>

                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={personalColumns}
                            dataSource={this.state.personalData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                    </Row>
                    {/*second form*/}
                    <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Professional info</h2>
                    </div>
                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={professionalColumns}
                            dataSource={this.state.professionalData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                        <div style={{ textAlign: "center", borderBottom: "1px solid #eee"}}>
                            <h3>Career Stages</h3>
                        </div>
                        <Row >
                            <Table
                                columns={careerColumns}
                                dataSource={this.state.careerData}
                                pagination={false}
                                rowClassName={record => (record.editable ? styles.editable : '')}
                            />
                        </Row>

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}} onClick={this.newCareer}>Add another
                                Career</Tag>
                        </Col>


                    </Row>
                    {/*3rd*/}
                    <div style={{ textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Specialization</h2>
                    </div>
                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={specializationColumns}
                            dataSource={this.state.specializationData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}} onClick={this.newSpecialization}>Add another
                                specialization</Tag>
                        </Col>
                    </Row>

                    {/*4rd Education*/}
                    <div style={{ textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Education</h2>
                    </div>
                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={educationColumns}
                            dataSource={this.state.educationData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}} onClick={this.newEducation}>Add another
                                program</Tag>
                        </Col>
                    </Row>
                    {/*5rd Registration*/}
                    <div style={{ textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Registration</h2>
                    </div>
                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={registrationColumns}
                            dataSource={this.state.registrationData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />
                    </Row>
                    {/*6th upload*/}
                    <div style={{ textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Uploads</h2>
                    </div>
                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={uploadsColumns}
                            dataSource={this.state.uploadsData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}} onClick={this.newUploads}>Add another
                                file</Tag>
                        </Col>
                    </Row>
                    {/*7th Awards*/}
                    {/*border-bottom: 1px solid @border-color-split;*/}
                    <div style={{ textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Awards</h2>
                    </div>

                    {this.getErrorInfo()}
                    <Row style={{marginBottom:40}}>
                        <Table
                            columns={awardColumns}
                            dataSource={this.state.awardData}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}}
                                 onClick={this.newAward}
                            >Add another award</Tag>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={24} lg={24} md={24} sm={24} xs={24} order={24}>
                            <FormItem {...submitFormLayout} style={{marginTop: 32}}>
                                <Button type="primary" htmlType="submit" loading={submitting}>
                                    <FormattedMessage id="form.submit"/>
                                </Button>
                                <Button style={{marginLeft: 8}}>
                                    <FormattedMessage id="form.save"/>
                                </Button>
                            </FormItem>
                        </Col>

                    </Row>
                </Form>
            </Card>
        );
    }
}

export default DoctorView;
