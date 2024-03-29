import config from '../configs/config';
import { authHeader } from '../helpers';
import axios from 'axios';
import { commonService } from './common.service';

export const categoryService = {
    getDanhMucTinh,
    getDanhMucHuyen,
    getDanhMucXa,
    getAllDanhMucXa,
    getAllDanhMucHuyen
};

async function getDanhMucTinh() {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/common/danh-muc-tinh`
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return commonService.handleError(error);
    }
}

async function getDanhMucHuyen(ma_tinh) {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/common/danh-muc-huyen`,
            params: {
                'ma_tinh' : ma_tinh
            }
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return commonService.handleError(error);
    }
}

async function getAllDanhMucHuyen() {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/common/all-danh-muc-huyen`,
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return commonService.handleError(error);
    }
}

async function getAllDanhMucXa() {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/common/all-danh-muc-xa`,
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return commonService.handleError(error);
    }
}

async function getDanhMucXa(ma_huyen) {

    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/common/danh-muc-xa`,
            params: {
                'ma_huyen' : ma_huyen
            }
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return commonService.handleError(error);
    }
}

