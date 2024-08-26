"use client";
import {
    FullscreenOutlined,
    RotateLeftOutlined,
    RotateRightOutlined,
    UploadOutlined,
    ZoomInOutlined,
    ZoomOutOutlined
} from '@ant-design/icons';
import { Button, Icon, Image, Typography } from '@components';
import { Space } from 'antd';
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './styles.scss';
import { ImageCardProps } from './types';
export const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
    function ImageCard({ type, id, thumbnail, title, className, style }, ref) {
        // Refs
        const imageCardRef = useRef<HTMLDivElement>(null);
        const imageRef = useRef<HTMLDivElement>(null);
        const othersRef = useRef<HTMLDivElement>(null);

        // States
        const [hover, setHover] = useState(false);
        const [othersHeight, setOthersHeight] = useState(0);

        const contentStyles = useMemo(() => (hover ?
            {
                inset: `auto 0 0 0`
            } :
            {
                inset: `auto 0 ${-1 * (othersHeight + 16)}px 0`
            }),
            [hover, othersHeight]);

        const uploadStyles = useMemo(() => (hover ?
            {
                inset: '16px 24px auto auto',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
            } :
            {
                inset: '-32px 24px auto auto',
                opacity: 0,
            }),
            [hover]);

        const previewStyles = useMemo(() => (hover ?
            {
                inset: '16px 72px auto auto',
                opacity: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
            } :
            {
                inset: '-32px 72px auto auto',
                opacity: 0,
            }),
            [hover]);

        const triggerClick = useCallback(() => {
            const syntheticEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });

            const img = document.getElementById(`image-card-${id}`);
            if (img) {
                img.dispatchEvent(syntheticEvent);
            }
        }, [id]);

        const onSubmit = useCallback((id: string) => { }, []);
        useEffect(() => {
            if (type) {
                setOthersHeight(othersRef.current ? othersRef.current.clientHeight : 0);
            }
        }, [type]);

        useEffect(() => {
            function handleResize() {
                setOthersHeight(othersRef.current ? othersRef.current.clientHeight : 0);
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <div
                className={`image-card ${className}`}
                style={style}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                ref={imageCardRef}
            >
                <Image
                    id={`image-card-${id}`}
                    width='100%'
                    height={300}
                    alt={title}
                    src={thumbnail}
                    preview={{
                        destroyOnClose: true,
                        toolbarRender: (
                            _,
                            {
                                transform: { scale },
                                actions: { onRotateLeft, onRotateRight, onZoomOut, onZoomIn, },
                            },
                        ) => (
                            <Space size={12} className="toolbar-wrapper">
                                <RotateLeftOutlined onClick={onRotateLeft} width={30} height={30} />
                                <RotateRightOutlined onClick={onRotateRight} />
                                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                                <UploadOutlined onClick={() => onSubmit(id)} />
                            </Space>
                        ),
                    }}
                    loading='lazy'
                    className='image-card__thumbnail'
                />
                <div className='image-card__shadow' />
                <div
                    className='image-card__content'
                    style={contentStyles}
                >
                    <div
                        className='image-card__content__metadata'
                    >
                        <Typography
                            type='title' level={type === 'large' ? 4 : 5} className='image-card__content__metadata__title'
                        >
                            {title}
                        </Typography>
                        <p
                            className='image-card__content__metadata__others'
                            ref={othersRef}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque quibusdam fugit?
                        </p>
                    </div>
                </div>

                <Button type='link' onClick={triggerClick} className='image-card__preview' style={previewStyles}>
                    <FullscreenOutlined />
                </Button>

                <Button
                    type='link'
                    className='image-card__upload'
                    style={uploadStyles}
                    onClick={() => onSubmit(id)}
                >
                    <Icon name='upload-outlined' />
                </Button>
            </div>
        )
    })