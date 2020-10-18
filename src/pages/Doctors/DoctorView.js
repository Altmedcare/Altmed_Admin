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
import {performRequest} from "../../../services/api";
import {Auth, Storage} from 'aws-amplify';
import AWS from 'aws-sdk';
import moment from 'moment';
import {AUTH_USER_TOKEN_KEY} from "@/utils/constants";

// var AWS=require('aws-sdk');


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1143459_fr9yng3c0v6.js',
});
const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;
const {TextArea} = Input;
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

@connect(({loading}) => ({
    submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class DoctorView extends Component {
    cacheOriginData = {};

    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            personalDetails: true,
            stage: [{hospital: '', start: '', end: '', position: ''}],
            specialization: [],
            name: '',
            email: '',
            dob: '',
            blood: '',
            address: '',
            experience: '',
            specialized: '',
            registration: '',
            reg_name: '',
            user: '',
            dated_on: '',
            reg_uid: '',

            awardData: [
                {
                    key: '1',
                    description: 'Description',
                    name: 'Name',
                    editable: false
                },

            ],
            specializationData: [
                {
                    key: '1',
                    description: 'Description',
                    title: 'Name',
                    editable: false
                },

            ],
            uploadsData: [
                {
                    key: '1',
                    file: '1',
                    description: '2',
                    name: '3',
                    _type: '4 ',
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
                    started_on: '1',
                    hospital_name: '2',
                    ended_on: '3',
                    position: '3',
                    editable: false
                },

            ],
            educationData: [
                {
                    key: '',
                    course: '',
                    institute: '',
                    state: '',
                    place: '',
                    university: '',
                    date_joined: '',
                    pass_out: '',
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

    componentDidMount() {

        if (localStorage.getItem(AUTH_USER_TOKEN_KEY) == null || this.props.location.state == undefined) {
            this.props.history.push({
                pathname: '/user/login'
            })
        }
        const {id} = this.props.location.state;
        performRequest('get', '/api/doctors/' + id)
            .then(response => {
                let data = response.data;
                let name, email, dob, blood, address, experience, specialized, registration, reg_name, phone, dated_on;
                data.data.UserAttributes.map(function (e) {
                    if (e.Name == 'custom:full_name')
                        name = e.Value
                    if (e.Name == 'email')
                        email = e.Value
                    if (e.Name == 'custom:dob')
                        dob = e.Value
                    if (e.Name == 'custom:blood_group')
                        blood = e.Value
                    if (e.Name == 'address')
                        address = e.Value
                    if (e.Name == 'custom:total_experience')
                        experience = e.Value
                    if (e.Name == 'custom:special_experience')
                        specialized = e.Value
                    if (e.Name == 'custom:special_experience')
                        registration = e.Value
                    if (e.Name === 'phone_number')
                        phone = e.Value

                })
                data.data.education.map(function (each) {
                    each.key = each.uuid
                })
                data.data.career.map(function (each) {
                    each.key = each.uuid
                })
                data.data.specialization.map(function (each) {
                    each.key = each.uuid
                })
                data.data.award.map(function (each) {
                    each.key = each.uuid
                })
                data.data.upload.map(function (each) {
                    each.key = each.uuid
                })
                let mmt = moment(dob).format('M/DD/YYYY');
                console.log(data.data.registration, 'data.data.registration')
                let date_on = moment(data.data.registration.length ? data.data.registration[0].dated_on : '').format('M/DD/YYYY');
                this.setState({
                    careerData: data.data.career,
                    specializationData: data.data.specialization,
                    awardData: data.data.award,
                    uploadsData: data.data.upload,
                    educationData: data.data.education,

                    name: name,
                    email: email,
                    dob: mmt === 'Invalid date' ? '01/01/1990' : mmt,
                    blood: blood,
                    address: address,
                    experience: experience,
                    specialized: specialized,
                    phone: phone,
                    registration: data.data.registration.length ? data.data.registration[0].registration : '',
                    reg_name: data.data.registration.length ? data.data.registration[0].name : '',
                    dated_on: date_on === 'Invalid date' ? '01/01/1990' : date_on,
                    reg_uid: data.data.registration.length ? data.data.registration[0].uuid : '',

                    loading: false,
                    loader: false
                })
            });
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
                    {/*<div className={styles.errorField}>{fieldLabels[key]}</div>*/}
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

    getAwardRowByKey(key, newData) {
        const data = this.state.awardData;
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


    handleAwardChange = (e, fieldName, key) => {
        const data = this.state.awardData;
        const newData = data.map(item => ({...item}));
        const target = this.getAwardRowByKey(key, newData);
        if (target) {
            target[fieldName] = e.target.value;
            this.setState({awardData: newData});
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
        if (fieldName === 'started_on') {
            const data = this.state.careerData;
            const newData = data.map(item => ({...item}));
            const target = this.getCareerRowByKey(key, newData);
            if (target) {
                target[fieldName] = moment(e).format('M/DD/YYYY');
                this.setState({careerData: newData});
            }
        } else if (fieldName === 'ended_on') {
            const data = this.state.careerData;
            const newData = data.map(item => ({...item}));
            const target = this.getCareerRowByKey(key, newData);
            if (target) {
                let start = moment(target['started_on']);
                if (start.isAfter(e)) {
                    e = start;
                }
                target[fieldName] = moment(e).format('M/DD/YYYY');
                this.setState({careerData: newData});
            }
        } else {
            const data = this.state.careerData;
            const newData = data.map(item => ({...item}));
            const target = this.getCareerRowByKey(key, newData);
            if (target) {
                target[fieldName] = e.target.value;
                this.setState({careerData: newData});
            }
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

        if (fieldName == 'date_joined') {
            const data = this.state.educationData;
            const newData = data.map(item => ({...item}));

            const target = this.getEducationRowByKey(key, newData);

            if (target) {
                target[fieldName] = moment(e).format('M/DD/YYYY');
                this.setState({educationData: newData});
            }

        } else if (fieldName == 'pass_out') {

            const data = this.state.educationData;
            const newData = data.map(item => ({...item}));
            const target = this.getEducationRowByKey(key, newData);
            if (target) {
                let start = moment(target['date_joined']);
                if (start.isAfter(e)) {
                    e = start;
                }
                target[fieldName] = moment(e).format('M/DD/YYYY');
                this.setState({educationData: newData});
            }

        } else {
            const data = this.state.educationData;
            const newData = data.map(item => ({...item}));
            const target = this.getEducationRowByKey(key, newData);
            if (target) {
                target[fieldName] = e.target.value;
                this.setState({educationData: newData});
            }
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
            hospital_name: '',
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

            if (false) {
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

            if (!target.name || !target.email || !target.dob || !target.blood || !target.address) {
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

            if (false) {
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
            if (false) {
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

            if (false) {
                message.error('Please complete the Spectialization information.');
                e.target.focus();
                this.setState({
                    loading: false,
                });
                return;
            }
            delete target.isNew;
            this.toggleEditableSpecial(e, key);
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
            if (false) {
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

    remove(key) {
        const data = this.state.awardData;
        // const newData = data.filter(item => item.key !== key);
        data.map(function (each) {
            if (each.key === key) {
                each.deleted = true;
            }
        })
        this.setState({awardData: data});
    }

    removeUploads(key) {
        const data = this.state.uploadsData;
        // const newData = data.filter(item => item.key !== key);
        data.map(function (each) {
            if (each.key === key) {
                each.deleted = true;
            }
        })
        this.setState({uploadsData: data});
    }

    removeCareer(key) {

        const data = this.state.careerData;
        // const newData = data.filter(item => item.key !== key);
        data.map(function (each) {
            if (each.key === key) {
                each.deleted = true;
            }
        })
        this.setState({careerData: data});
    }

    removeSpectialization(key) {
        const data = this.state.specializationData;
        // const newData = data.filter(item => item.key !== key);
        data.map(function (each) {
            if (each.key === key) {
                each.deleted = true;
            }
        })
        this.setState({specializationData: data});
    }

    removeEdication(key) {
        const data = this.state.educationData;
        // const newData = data.filter(item => item.key !== key);
        data.map(function (each) {
            if (each.key === key) {
                each.deleted = true;
            }
        })
        this.setState({educationData: data});
    }


    cancelSpectialization(e, key) {

        this.clickedCancel = true;
        e.preventDefault();
        const data = this.state.specializationData;
        const newData = data.map(item => ({...item}));
        const target = this.getSpecializationRowByKey(key, newData);
        if (this.cacheOriginData[key]) {
            Object.assign(target, this.cacheOriginData[key]);
            delete this.cacheOriginData[key];
        }
        target.editable = false;
        this.setState({specializationData: newData});
        this.clickedCancel = false;
    }

    cancelCareer(e, key) {
        this.clickedCancel = true;
        e.preventDefault();
        const data = this.state.careerData;
        const newData = data.map(item => ({...item}));
        const target = this.getCareerRowByKey(key, newData);
        if (this.cacheOriginData[key]) {
            Object.assign(target, this.cacheOriginData[key]);
            delete this.cacheOriginData[key];
        }
        target.editable = false;
        this.setState({careerData: newData});
        this.clickedCancel = false;
    }

    cancelEducation(e, key) {
        this.clickedCancel = true;
        e.preventDefault();
        const data = this.state.educationData;
        const newData = data.map(item => ({...item}));
        const target = this.getEducationRowByKey(key, newData);
        if (this.cacheOriginData[key]) {
            Object.assign(target, this.cacheOriginData[key]);
            delete this.cacheOriginData[key];
        }
        target.editable = false;
        this.setState({educationData: newData});
        this.clickedCancel = false;
    }

    cancelPersonal(e, key) {
        this.clickedCancel = true;
        e.preventDefault();
        const data = this.state.personalData;
        const newData = data.map(item => ({...item}));
        const target = this.getPersonalRowByKey(key, newData);
        if (this.cacheOriginData[key]) {
            Object.assign(target, this.cacheOriginData[key]);
            delete this.cacheOriginData[key];
        }
        target.editable = false;
        this.setState({personalData: newData});
        this.clickedCancel = false;
    }

    cancelUploads(e, key) {
        this.clickedCancel = true;
        e.preventDefault();
        const data = this.state.uploadsData;
        const newData = data.map(item => ({...item}));
        const target = this.getUploadRowByKey(key, newData);
        if (this.cacheOriginData[key]) {
            Object.assign(target, this.cacheOriginData[key]);
            delete this.cacheOriginData[key];
        }
        target.editable = false;
        this.setState({uploadsData: newData});
        this.clickedCancel = false;
    }

    cancelAward(e, key) {
        this.clickedCancel = true;
        e.preventDefault();
        const data = this.state.awardData;
        const newData = data.map(item => ({...item}));
        const target = this.getAwardRowByKey(key, newData);
        if (this.cacheOriginData[key]) {
            Object.assign(target, this.cacheOriginData[key]);
            delete this.cacheOriginData[key];
        }
        target.editable = false;
        this.setState({awardData: newData});
        this.clickedCancel = false;
    }

    handleChange = (key, value) => {
        let val = value;
        if (key.target == undefined) {
            val = moment(key).format('M/DD/YYYY');
            this.setState({
                'dob': val,
            })
        } else {
            this.setState({
                [key.target.id]: key.target.value,
            })
        }
    };

    updateDoctor = () => {
        const {id} = this.props.location.state;
        this.setState({
            loader: true
        })
        const AWSConfig = {

        }
        AWS.config.correctClockSkew = true;
        AWS.config.update(AWSConfig);
        const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

        cognitoidentityserviceprovider.adminUpdateUserAttributes({


            Username: id,//username
            UserAttributes: [

                {
                    "Name": "address",
                    "Value": this.state.address
                },
                {
                    "Name": "custom:dob",
                    "Value": this.state.dob
                },
                {
                    "Name": "custom:total_experience",
                    "Value": this.state.experience
                },
                {
                    "Name": "custom:blood_group",
                    "Value": this.state.blood
                },
                {
                    "Name": "custom:full_name",
                    "Value": this.state.name
                },
                {
                    "Name": "custom:special_experience",
                    "Value": this.state.specialized
                },
                {
                    "Name": "phone_number",
                    "Value": this.state.phone
                },
                {
                    "Name": "email",
                    "Value": this.state.email
                }
            ],
        }, function (res) {
            console.log(res, 'res')
        });

        let params = {
            UserPoolId: "ap-south-1_p7Jz6LG3T",//YOUR UserPoolID
            Username: id,//username
            UserAttributes: [
                {
                    Name: "custom:full_name",
                    Value: "Rejula.sssss"
                },
            ],
        };


        let career = [

            {
                "uuid": "68542826-5188-4e4f-a9c0-8dc4eff6ea68",
                "deleted": false,
                "sub": "1efd82eb-67b9-48b9-8516-f0a0e359d603",
                "hospital_name": "1111",
                "started_on": "March, 2019",
                "ended_on": "Current",
                "position": "Sr dr"
            },

        ];
        let specialization = [
            {
                // "uuid": "47643ac5-9827-4c0a-bc8b-f13736367752",
                // "created_at": "2020-10-01T15:38:38.618066Z",
                // "modified_at": "2020-10-01T15:38:38.618094Z",
                // "deleted": false,
                // "sub": "0afc6efd-d59c-4c69-b511-ec862ac77b90",
                "title": "Test",
                "description": "Des"
            }
        ];
        let education = [
            {
                "uuid": "47643ac5-9827-4c0a-bc8b-f13736367752",
                "created_at": "2020-10-01T15:38:38.618066Z",
                "modified_at": "2020-10-01T15:38:38.618094Z",
                "deleted": false,
                "sub": "0afc6efd-d59c-4c69-b511-ec862ac77b90",
                "course": null,
                "institute": null,
                "place": null,
                "state": null,
                "university": null,
                "date_joined": null,
                "pass_out": null
            }
        ];
        let upload = [
            {
                "uuid": "47643ac5-9827-4c0a-bc8b-f13736367752",
                "created_at": "2020-10-01T15:38:38.618066Z",
                "modified_at": "2020-10-01T15:38:38.618094Z",
                "deleted": false,
                "sub": "0afc6efd-d59c-4c69-b511-ec862ac77b90",
                "file": null,
                "name": null,
                "_type": null,
                "description": "Des"
            }
        ];
        let award = [
            {
                // "uuid": "47643ac5-9827-4c0a-bc8b-f13736367752",
                "created_at": "2020-10-01T15:38:38.618066Z",
                "modified_at": "2020-10-01T15:38:38.618094Z",
                "deleted": false,
                "sub": "0afc6efd-d59c-4c69-b511-ec862ac77b90",
                "name": "nameess",
                "description": "Des"
            }
        ];

        let registrationData = [
            {
                "uuid": this.state.reg_uid,
                "registration": this.state.registration,
                "name": this.state.reg_name,
                "dated_on": this.state.dated_on
            }
        ];
        let careerData = [];
        this.state.careerData.map(function (each) {
            let obj = each;
            let arr = {
                "uuid": obj['uuid'],
                "deleted": obj['deleted'],
                "sub": obj['sub'],
                "hospital_name": obj['hospital_name'],
                "started_on": obj['started_on'],
                "ended_on": obj['ended_on'],
                "position": obj['position']
            }

            careerData.push(arr);
        });
        let specializationData = [];
        this.state.specializationData.map(function (each) {
            let obj = each;
            let arr = {
                "uuid": obj['uuid'],
                "deleted": obj['deleted'],
                "title": obj['title'],
                "description": obj['description']
            }
            specializationData.push(arr);
        });
        let awardData = [];
        this.state.awardData.map(function (each) {
            let obj = each;
            let arr = {
                "uuid": obj['uuid'],
                "deleted": obj['deleted'],
                "name": obj['name'],
                "description": obj['description']
            }
            awardData.push(arr);
        });
        let educationData = [];
        this.state.educationData.map(function (each) {
            let obj = each;
            let arr = {
                "uuid": obj['uuid'],
                "deleted": obj['deleted'],
                "course": obj['course'],
                "institute": obj['institute'],
                "place": obj['place'],
                "state": obj['state'],
                "university": obj['university'],
                "date_joined": obj['date_joined'],
                "pass_out": obj['pass_out']
            }
            educationData.push(arr)
        })
        let uploadData = [];
        this.state.uploadsData.map(function (each) {
            let obj = each;
            let arr = {
                "uuid": obj['uuid'],
                "deleted": obj['deleted'],
                "file": obj['file'],
                "name": obj['name'],
                "_type": obj['_type'],
                "description": obj['description']
            }
            uploadData.push(arr)
        });

        const formData = new FormData();
        formData.append('career', JSON.stringify(careerData));
        formData.append('specialization', JSON.stringify(specializationData));
        formData.append('award', JSON.stringify(awardData));
        formData.append('education', JSON.stringify(educationData));
        formData.append('upload', JSON.stringify(uploadData));
        formData.append('registration', JSON.stringify(registrationData));
        performRequest('put', '/api/doctors/edit/' + id, null, formData)
            .then(response => {
                console.log(response, 'Fake it');
                this.setState({
                    loader: false
                })
            });
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
                dataIndex: 'description',
                key: 'description',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleAwardChange(e, 'description', record.key)}
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
                <a onClick={e => this.cancelAward(e, record.key)}><Button icon="minus-circle"/></a>
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

        const uploadsColumns = [
            {
                title: 'File',
                dataIndex: 'file',
                key: 'file',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Upload>
                                <Button>
                                    <Icon type="upload"/> Click to Upload
                                </Button>
                            </Upload>
                            // <Input
                            //     value={text}
                            //     autoFocus
                            //     onChange={e => this.handleUploadChange(e, 'file', record.key)}
                            //
                            //     placeholder="Name"
                            // />
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
                dataIndex: '_type',
                key: '_type',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleUploadChange(e, '_type', record.key)}
                                placeholder="Description"
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleUploadChange(e, 'description', record.key)}
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
        const specializationColumns = [
            {
                title: 'Name',
                dataIndex: 'title',
                key: 'title',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleSpecialChange(e, 'title', record.key)}
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
                dataIndex: 'description',
                key: 'description',
                width: '40%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                onChange={e => this.handleSpecialChange(e, 'description', record.key)}
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
                  <a onClick={e => this.saveSpectialization(e, record.key)}><Button icon="save"/></a>
                  <Divider type="vertical"/>
                  <Popconfirm title="Do you want to delete this line?"
                              onConfirm={() => this.removeSpectialization(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveSpectialization(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancelSpectialization(e, record.key)}><Button icon="minus-circle"
                                                                                    style={{marginLeft: 8}}/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableSpecial(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeSpectialization(record.key)}>
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
                dataIndex: 'hospital_name',
                key: 'hospital_name',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleCareerChange(e, 'hospital_name', record.key)}
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
                dataIndex: 'started_on',
                key: 'started_on',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <DatePicker
                                value={moment(text)}
                                onChange={e => this.handleCareerChange(e, 'started_on', record.key)}
                            />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Ended On',
                dataIndex: 'ended_on',
                key: 'ended_on',
                width: '20%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <DatePicker
                                value={text !== 'Current' ? moment(text) : moment('01/01/2020')}
                                onChange={e => this.handleCareerChange(e, 'ended_on', record.key)}
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
                <a onClick={e => this.cancelCareer(e, record.key)}><Button icon="minus-circle"
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
                dataIndex: 'course',
                key: 'course',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <Input
                                value={text}
                                autoFocus
                                onChange={e => this.handleEducationChange(e, 'course', record.key)}
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
                dataIndex: 'date_joined',
                key: 'date_joined',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <DatePicker
                                value={moment(text, 'YYYY-MM-DD').isValid() ? moment(text) : moment('01/01/2020')}
                                onChange={e => this.handleEducationChange(e, 'date_joined', record.key)}
                            />
                            // <Input
                            //
                            //     placeholder="Joined on"
                            // />
                        );
                    }
                    return text;
                },
            },
            {
                title: 'Pass out on',
                dataIndex: 'pass_out',
                key: 'pass_out',
                width: '12.5%',
                render: (text, record) => {
                    if (record.editable) {
                        return (
                            <DatePicker
                                value={moment(text, 'YYYY-MM-DD').isValid() ? moment(text) : moment('01/01/2020')}
                                onChange={e => this.handleEducationChange(e, 'pass_out', record.key)}
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
                  <Popconfirm title="Do you want to delete this line?"
                              onConfirm={() => this.removeEdication(record.key)}>
                    <a><Button icon="delete" style={{marginLeft: 8}}/></a>
                  </Popconfirm>
                </span>
                            );
                        }
                        return (
                            <span>
                <a onClick={e => this.saveEducation(e, record.key)}><Button icon="save"/></a>
                <Divider type="vertical"/>
                <a onClick={e => this.cancelEducation(e, record.key)}><Button icon="minus-circle"
                                                                              style={{marginLeft: 8}}/></a>
              </span>
                        );
                    }
                    return (
                        <span>
              <a style={{color: "#116bda"}} onClick={e => this.toggleEditableEducation(e, record.key)}><Button
                  icon="edit"/></a>
              <Divider type="vertical"/>
              <Popconfirm title="Do you want to delete this?" onConfirm={() => this.removeEdication(record.key)}>
                <a style={{color: "#ff4d4f"}}><Button icon="delete" style={{marginLeft: 8}}/></a>
              </Popconfirm>
            </span>
                    );
                },
            },
        ];

        return (
            <Card bordered={false} loading={this.state.loader}>
                <Form onSubmit={this.handleSubmit} hideRequiredMark style={{marginTop: 8}}>
                    <div style={{textAlign: "center", marginBottom: 10, borderBottom: "1px solid #eee"}}>
                        <h2>Personal details</h2>
                    </div>

                    <Row style={{marginBottom: 40}}>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Full Name"/>}>
                                {getFieldDecorator('name', {
                                    initialValue: this.state.name,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),
                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Full Name'})}
                                          onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Email"/>}>
                                {getFieldDecorator('email', {
                                    initialValue: this.state.email,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),

                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Email'})} onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="DOB"/>}>
                                {getFieldDecorator('dob', {
                                    initialValue: moment(this.state.dob),
                                    // initialValue: this.state.dob,

                                    // })(<Input placeholder={formatMessage({id: 'DOB'})}/>)}
                                })(<DatePicker onChange={this.handleChange}/>)}
                                {/*<Input placeholder={formatMessage({id: 'DOB'})}/>*/}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Blood Group"/>}>
                                {getFieldDecorator('blood', {
                                    initialValue: this.state.blood,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),


                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Blood Group'})}
                                          onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Address"/>}>
                                {getFieldDecorator('address', {
                                    initialValue: this.state.address,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),

                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Address'})} onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>

                    </Row>
                    {/*second form*/}
                    <div style={{textAlign: "center", marginBottom: 10, borderBottom: "1px solid #eee"}}>
                        <h2>Professional info</h2>
                    </div>
                    <Row style={{marginBottom: 40}}>

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Overall Experience
"/>}>
                                {getFieldDecorator('experience', {
                                    initialValue: this.state.experience,

                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),
                                            onChange: this.handleChange
                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Full Name'})}
                                          onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Specialized "/>}>
                                {getFieldDecorator('specialized', {
                                    initialValue: this.state.specialized,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),

                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Email'})} onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>


                        <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                            <h3>Career Stages</h3>
                        </div>
                        <Row>
                            {/*const newData = data.filter(item => item.key !== key);*/}

                            <Table
                                columns={careerColumns}
                                dataSource={this.state.careerData.filter(item => item.deleted !== true)}
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
                    <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Specialization</h2>
                    </div>
                    <Row style={{marginBottom: 40}}>
                        <Table
                            columns={specializationColumns}
                            dataSource={this.state.specializationData.filter(item => item.deleted !== true)}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}} onClick={this.newSpecialization}>Add another
                                specialization</Tag>
                        </Col>
                    </Row>

                    {/*4rd Education*/}
                    <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Education</h2>
                    </div>
                    <Row style={{marginBottom: 40}}>
                        <Table
                            columns={educationColumns}
                            dataSource={this.state.educationData.filter(item => item.deleted !== true)}
                            pagination={false}
                            rowClassName={record => (record.editable ? styles.editable : '')}
                        />

                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <Tag style={{marginLeft: 20, marginTop: 20}} onClick={this.newEducation}>Add another
                                program</Tag>
                        </Col>
                    </Row>
                    {/*5rd Registration*/}
                    <div style={{textAlign: "center", marginBottom: 10, borderBottom: "1px solid #eee"}}>
                        <h2>Registration</h2>
                    </div>
                    <Row style={{marginBottom: 40}}>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Registration Number"/>}>
                                {getFieldDecorator('registration', {
                                    initialValue: this.state.registration,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),

                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Full Name'})}
                                          onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Name"/>}>
                                {getFieldDecorator('reg_name', {

                                    initialValue: this.state.reg_name,
                                    rules: [
                                        {
                                            required: true,
                                            message: formatMessage({id: 'validation.title.required'}),
                                            onChange: this.handleChange
                                        },
                                    ],
                                })(<Input placeholder={formatMessage({id: 'Email'})} onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={24} xs={24} order={12}>
                            <FormItem {...formItemLayout} label={<FormattedMessage id="Dated on"/>}>
                                {getFieldDecorator('dated_on', {
                                    initialValue: moment(this.state.dated_on),
                                })(<DatePicker onChange={this.handleChange}/>)}
                            </FormItem>
                        </Col>
                        {/*<Table*/}
                        {/*    columns={registrationColumns}*/}
                        {/*    dataSource={this.state.registrationData}*/}
                        {/*    pagination={false}*/}
                        {/*    rowClassName={record => (record.editable ? styles.editable : '')}*/}
                        {/*/>*/}
                    </Row>
                    {/*6th upload*/}
                    <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Uploads</h2>
                    </div>
                    <Row style={{marginBottom: 40}}>
                        <Table
                            columns={uploadsColumns}
                            dataSource={this.state.uploadsData.filter(item => item.deleted !== true)}
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
                    <div style={{textAlign: "center", borderBottom: "1px solid #eee"}}>
                        <h2>Awards</h2>
                    </div>

                    {this.getErrorInfo()}
                    <Row style={{marginBottom: 40}}>
                        <Table
                            columns={awardColumns}
                            dataSource={this.state.awardData.filter(item => item.deleted !== true)}
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
                                <Button type="primary" loading={submitting}
                                        onClick={this.updateDoctor}
                                >
                                    <FormattedMessage id="form.submit"/>
                                </Button>
                                {/*<Button style={{marginLeft: 8}}>*/}
                                {/*    <FormattedMessage id="form.save"/>*/}
                                {/*</Button>*/}
                            </FormItem>
                        </Col>

                    </Row>
                </Form>
            </Card>
        );
    }
}

export default DoctorView;
