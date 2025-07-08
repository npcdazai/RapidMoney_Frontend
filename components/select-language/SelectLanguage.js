"use client";

import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { RiCheckLine, RiSearchLine } from 'react-icons/ri';
import styles from "./select-language.module.scss"

const languages = ['English', 'Hindi'];

const SelectLanguage = ({ isOpen, onClose }) => {
    const [selectedLang, setSelectedLang] = useState('English');
    const [search, setSearch] = useState('');

    const filteredLangs = languages.filter((lang) =>
        lang.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            closable={false}
            maskStyle={{ backdropFilter: 'blur(10px)' }}
            bodyStyle={{ padding: 0 }}
            width={400}
            className={styles.languageModal}
        >
            <div className="">
                <h2 className="font-bold font-28 text-[#333333] text-center pb-6">Select Language</h2>
                <Input
                    placeholder="Search Language"
                    className={`px-4 py-2 border border-[#D0D5DD] focus:border-[#B9B9B9] shadow-none ${styles.categoriesSearch}`}
                    style={{
                        fontSize: "16px",
                        height: "44px",
                        marginBottom: "30px",
                        // borderRadius : "60px"
                    }}
                    prefix={
                        <RiSearchLine size={20} color="#3333333D" />
                    }
                />
                <ul className="space-y-5">
                    {filteredLangs.map((lang) => (
                        <li
                            key={lang}
                            className={`flex items-center gap-2 cursor-pointer ${selectedLang === lang ? 'font-20 font-medium text-black' : 'font-20 font-light'
                                }`}
                            onClick={() => setSelectedLang(lang)}
                        >
                            <RiCheckLine size={20}
                                className={`${selectedLang === lang ? 'primary-color' : 'text-[#D6D6D6]'
                                    }`}
                            />
                            
                            {lang}
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
};

export default SelectLanguage;
