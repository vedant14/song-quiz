import React, { useState } from "react";
import Link from "next/link";
import siteData from "../../data/siteconfig.json";
import { HeaderWrapper, LogoWrapper } from "./styles";

export function Header({ page }) {
	return (
		<HeaderWrapper>
			<div className="Container">
				<Link href="/" id="logo" className={"image-container"} passHref>
					<LogoWrapper src="/logo.png" alt="Logo" />
				</Link>
			</div>
		</HeaderWrapper>
	);
}
