// React
import React from "react";
// MUI
import { Button } from "@material-ui/core";
import { usePagination } from "@material-ui/lab/Pagination";
// Icons
import { ChevronsLeft, ChevronsRight } from "react-feather";
// Styles
import "./styles.scss";

const PaginationNew = ({
	onChange,
	defaultPage,
	siblingCount,
	boundaryCount,
	showFirstButton,
	page,
	count,
}) => {
	const setPage = (e, newPage) => {
		onChange(newPage);
	};
	const handlePrev = () => {
		onChange(page - 1);
	};
	const handleNext = () => {
		onChange(page + 1);
	};

	const { items } = usePagination({
		count,
		defaultPage,
		siblingCount,
		boundaryCount,
		showFirstButton,
		page,
		onChange: setPage,
	});
	const previous = items.shift();
	const next = items.pop();

	return (
		<nav className="paginator">
			<Button
				variant="contained"
				type="button"
				{...previous}
				className="paginator__item paginator__item--control"
				onClick={handlePrev}
			>
				<ChevronsLeft className="paginator__item-icon paginator__item-icon--left" />
				Previous
			</Button>
			<ul className="paginator__list">
				{items.map(({ page, type, selected, ...item }, index) =>
					type === "start-ellipsis" || type === "end-ellipsis" ? (
						<li key={page} className="paginator__item paginator__item--page">
							<div className="paginator__item--ellipsis">. . .</div>
						</li>
					) : (
						<li key={page} className="paginator__item paginator__item--page">
							<Button
								type="button"
								variant="contained"
								className={`paginator__item ${
									selected ? "paginator__item--selected" : ""
								}`}
								{...item}
							>
								{page}
							</Button>
						</li>
					),
				)}
			</ul>
			<Button
				variant="contained"
				type="button"
				{...next}
				className="paginator__item paginator__item--control"
				onClick={handleNext}
			>
				Next
				<ChevronsRight className="paginator__item-icon paginator__item-icon--right" />
			</Button>
		</nav>
	);
};

export default PaginationNew;
