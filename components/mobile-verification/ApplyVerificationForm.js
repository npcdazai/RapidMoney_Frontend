'use client';

import { Select, Form } from 'antd';
import { useState } from 'react';

import MobileForm from './MobileForm';
import OtpForm from './OtpForm';
import BasicDetailsForm from './BasicForm';
import ConsentForm from './ConsentForm';

export default function ApplyVerificationForm() {
    const [step, setStep] = useState(1);
    const [form] = Form.useForm();

    return (
        <>
            <div>
                {step === 1 && (
                    <MobileForm
                        setStep={setStep}
                    />
                )}

                {step === 2 && (
                    <OtpForm
                        setStep={setStep}
                    />
                )}

                {step === 3 && (
                    <BasicDetailsForm
                        setStep={setStep}
                    />
                )}

                {step === 4 && (
                    <ConsentForm
                        setStep={setStep}
                    />
                )}
            </div>
        </>

    );
}
