"use client";

import { Button } from "@components";
import { routing } from "@configs";
import { useLoading } from "@contexts";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { signOut as signOutNextAuth } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Logo } from "./Logo";
import "./styles.scss";
import { HeaderProps } from "./types";

export function Header({ isAuth }: HeaderProps) {
	const { setLoading } = useLoading();
	const router = useRouter();
	const signOut = useCallback(() => {
		setLoading(true);
		signOutNextAuth().then(
			// Success
			(value) => {
				router.push(routing.homepage.HOMEPAGE);
				setLoading(false);
			},
			// Rejected
			(reason) => {
				setLoading(false);
			},);
	}, [router, setLoading]);

	return (
		<AntdHeader className="header">
			{/* Logo */}
			<Link href="/" className="header__logo">
				<Logo />
			</Link>

			{/* Items */}
			<div className="header__content">
				{isAuth ? (
					<Link
						href='#'
						className="header__content__item"
						onClick={signOut}
					>
						<Button className="header__content__item__logout-btn">
							Sign out
						</Button>
					</Link>
				) : (
					<Link href={routing.auth.SIGN_IN} className="header__content__item">
						<Button>Login</Button>
					</Link>
				)}
			</div>
		</AntdHeader>
	);
}
function onfulfilled(value: undefined): PromiseLike<undefined> | undefined {
	throw new Error("Function not implemented.");
}

