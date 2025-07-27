"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { TiTick } from 'react-icons/ti';

const TravelDealCard = () => {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])  
    if (!mounted) return null;
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Card bên trái */}
                <div className="flex-1 bg-[#d1d1e9] dark:bg-[#242629] border border-gray-300 rounded-2xl px-8 py-8 shadow-md flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl text-[#2b2c34] dark:text-[#fffffe] font-bold italic mb-4">{t("home.travel_deal_text_1")}</h2>
                        <div className="flex items-start mt-2">
                            <TiTick className="mt-1" />
                            <p className="ml-2 text-[#2b2c34] dark:text-[#94a1b2] italic">
                                {t("home.travel_deal_text_2")}
                            </p>
                        </div>
                        <div className="flex items-start mt-2">
                            <TiTick className="mt-1" />
                            <p className="ml-2 text-[#2b2c34] dark:text-[#94a1b2] italic">
                                {t("home.travel_deal_text_3")} <span className="font-semibold text-[#e45858] dark:text-[#7f5af0]">{t("home.travel_deal_price")}</span>
                            </p>
                        </div>
                        <div className="flex items-start mt-2">
                            <TiTick className="mt-1" />
                            <p className="ml-2 text-[#2b2c34] dark:text-[#94a1b2] italic">
                                {t("home.travel_deal_text_4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card bên phải */}
                <div className="flex-1 bg-[#d1d1e9] dark:bg-[#242629] border border-gray-300 rounded-2xl px-8 py-8 shadow-md flex flex-col justify-between">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-full">
                        {/* Text bên trái */}
                        <div className="flex-1">
                            <h3 className="text-lg text-[#2b2c34] dark:text-[#fffffe] font-semibold mb-2">
                                {t("home.travel_deal_text_5")}
                            </h3>
                            <p className="text-[#2b2c34] dark:text-[#94a1b2] mb-4">
                                {t("home.travel_deal_text_6")} <span className="font-semibold text-[#e45858] dark:text-[#7f5af0]">{t("home.travel_deal_discount")}</span> {t("home.travel_deal_text_7")}
                            </p>
                            <button className="px-5 py-2 bg-[#6246ea] hover:bg-[#5135c8] text-[#fffffe] rounded-full font-semibold shadow-md transition-all cursor-pointer">
                                {t("home.travel_deal_button")}
                            </button>
                        </div>

                        {/* Hình ảnh bên phải */}
                        <div className="flex-shrink-0">
                            <img
                                className="w-[180px] h-[100px] object-cover rounded-md shadow-sm"
                                src="/images/discount.jpg"
                                alt="Ưu đãi du lịch"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelDealCard