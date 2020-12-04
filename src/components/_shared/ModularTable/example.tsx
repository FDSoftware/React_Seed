// TODO: este archivo es a modo de demostracion, se va luego de terminar el componente
import React, { useState } from "react";

import { ModularTable } from "components/_shared/ModularTable";
import EmptyProducts from "assets/img/search-products.svg";
//data mock
// Types
import { IProduct } from "common/types/IProduct";
import { IPagination } from "components/_shared/ModularTable/types";

import { paginationHandler } from "components/_shared/ModularTable/pagination";
import { stableSort } from "components/_shared/ModularTable/sorting";

const headCells = [
	{ id: "productName", label: "Descripción", sortable: true },
	{ id: "lab", label: "Laboratorio", sortable: true },
	{ id: "estado", label: "Estado", sortable: false },
	{ id: "pvp", label: "PVP", sortable: true },
	{ id: "discountPrice", label: "p.c/desc", sortable: true },
	{ id: "discountPercentage", label: "%dto s/pub", sortable: true },
	{ id: "cantidad", label: "cant", sortable: false },
];

const headCells2 = [
	{ id: "nombre", label: "Nombre", sortable: true },
	{ id: "apellido", label: "Apellido", sortable: true },
	{ id: "mail", label: "Mail", sortable: false },
];

const userMock = [
	{ id: 1, cells: { nombre: "foo 1", apellido: "baar", mail: "mail@gmai.com" } },
	{ id: 2, cells: { nombre: "foo 2", apellido: "baar", mail: "mail@gmai.com" } },
	{ id: 3, cells: { nombre: "foo 3", apellido: "baar", mail: "mail@gmai.com" } },
	{ id: 4, cells: { nombre: "foo 4", apellido: "baar", mail: "mail@gmai.com" } },
];

const myEmpty = { img: EmptyProducts, txt: "no se encontraron los productos" };

export const TableWrapper = () => {
	// Modal Handlers
	const [modalInfo, setModalInfo] = useState(false);
	const closeModalInfo = () => setModalInfo(false);
	const [dataModal, setDataModal] = useState<IProduct>();

	const openModalInfo = (data: IProduct) => {
		setDataModal(data);
		setModalInfo(true);
	};
	const Modal = (e: any, data: any) => {
		console.log(data, e);
	};

	// sorting
	const [productSortData, setProductSortData] = useState<Array<any>>(userMock);
	const handleSort = (e: any, data: any) => {
		setProductSortData(stableSort(productSortData, e, data));
		handlePageChange(paginationInfo.activePage);
	};
	// Pagination
	let myPaginationHandler = paginationHandler(productSortData ?? [], 4);
	const [productData, setProductData] = useState<Array<any>>(myPaginationHandler(0));
	const [paginationInfo, setPaginationInfo] = useState<IPagination>({
		activePage: 1,
		totalItems: 120,
	});

	const handlePageChange = (page: number) => {
		console.log("hook page change", page);
		setProductData(myPaginationHandler(page));
		setPaginationInfo({ ...paginationInfo, activePage: page });
	};

	return (
		<div className="search-results" style={{ padding: "5rem" }}>

			<ModularTable
				Empty={myEmpty}
				headCells={headCells}
				bodyData={undefined}
				rowActions={{ Generic: null }}
				onPageChange={handlePageChange}
				paginationData={paginationInfo}
				onSort={handleSort}
			/>

			<ModularTable
				Empty={myEmpty}
				headCells={headCells}
				rowActions={{ Skeleton: null }}
				onPageChange={handlePageChange}
				paginationData={paginationInfo}
				onSort={handleSort}
			/>

			<ModularTable
				Empty={myEmpty}
				headCells={headCells2}
				bodyData={userMock}
				rowActions={{ Generic: openModalInfo }}
				onPageChange={handlePageChange}
				paginationData={paginationInfo}
				onSort={handleSort}
			/>

		</div>
	);
};
