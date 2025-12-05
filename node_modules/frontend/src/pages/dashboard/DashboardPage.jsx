import { React, memo } from "react";
import Style from "./Dashboard.module.scss";
import { Welcom } from "./Welcom";
import { ContentWrapper } from "../../ui/contentWrapper/ContentWrapper";
import { Content } from "../../ui/content/Content";
import { Tasks } from "../../components/tasks/Tasks";
import { TaskStatus } from "../../components/taskstatus/TaskStatus";
export const DashboardPage = memo(() => {
	return (
		<ContentWrapper>
			<Welcom />
			<Content>
				<Tasks/>
				<TaskStatus/>
			</Content>
		</ContentWrapper>
	);
});
