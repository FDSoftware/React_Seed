import { useRef, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { CallHistoryMethodAction } from "connected-react-router";

export const useTitleFocus = (path: string): React.RefObject<HTMLHeadingElement> => {
	type history = CallHistoryMethodAction;
	type headers = React.Ref<HTMLHeadingElement>;
	type confirm = boolean;
	const match = useHistory<history>();
	const title: headers = useRef<HTMLHeadingElement>(null);
	const location: confirm = match.location.pathname === path;

	useLayoutEffect(() => {
		const onFocus = (): void => {
			if (location && null !== title.current) {
				title.current.focus();
			}
		};
		onFocus();
	}, [location]);

	return title;
};
