import React, { useState } from "react";
import siteData from "../../data/siteconfig.json";
import { HeaderWrapper, LogoWrapper } from "./styles";

export function Header({ page }) {
	return (
		<HeaderWrapper>
			<div className="Container">
				<a
					href="https://www.songtastic.xyz/"
					id="logo"
					className={"image-container"}
				>
					<LogoWrapper src="/logo.png" alt="Logo" />
				</a>
			</div>
		</HeaderWrapper>
	);
}
