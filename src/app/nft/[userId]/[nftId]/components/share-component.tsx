"use client";
import React, { useState } from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	WhatsappIcon,
} from "react-share";
import { Button, Modal } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { toast } from "sonner";

interface ShareComponentProps {
	url: string;
	title: string;
}

const ShareComponent: React.FC<ShareComponentProps> = ({ url, title }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const onLinkClick = async () => {
		await navigator.clipboard.writeText(url);
		setIsModalVisible(false);
		toast.success("Link copied to clipboard");
	};

	return (
		<>
			<button
				className="m-5 rounded p-2 px-4 transition-colors duration-300 bg-primary text-primary-foreground"
				onClick={showModal}
			>
				Share
			</button>

			<Modal
				footer={null}
				onCancel={handleCancel}
				open={isModalVisible}
				title="Share"
			>
				<div className="flex w-fit gap-8 p-4">
					<FacebookShareButton title={title} url={url}>
						<FacebookIcon round size={32} />
					</FacebookShareButton>

					<TwitterShareButton title={title} url={url}>
						<TwitterIcon round size={32} />
					</TwitterShareButton>

					<LinkedinShareButton title={title} url={url}>
						<LinkedinIcon round size={32} />
					</LinkedinShareButton>

					<WhatsappShareButton title={title} url={url}>
						<WhatsappIcon round size={32} />
					</WhatsappShareButton>

					<Button onClick={onLinkClick} shape="circle" type="primary">
						<LinkOutlined size={32} />
					</Button>
				</div>
			</Modal>
		</>
	);
};
export default ShareComponent;
