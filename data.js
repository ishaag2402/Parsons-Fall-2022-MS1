var radiusFactor = 0.75;

let data = [
    
// block 1																							
{	x:	-7.84	,	y:	0	,	z:	-1*	282.57	,	radius:	radiusFactor*	2	,	color:	0x668d58	,	index:	1	}	,	//	hedge green
{	x:	-5.7	,	y:	0	,	z:	-1*	282.64	,	radius:	radiusFactor*	2	,	color:	0xd0dae4	,	index:	2	}	,	//	pavement
{	x:	-8.55	,	y:	0	,	z:	-1*	280.41	,	radius:	radiusFactor*	3	,	color:	0xd6ccb1	,	index:	3	}	,	//	fountain beige
{	x:	-6.44	,	y:	1	,	z:	-1*	280.75	,	radius:	radiusFactor*	2	,	color:	0xb6c6dd	,	index:	4	}	,	//	stone bench
{	x:	-5.95	,	y:	2	,	z:	-1*	279.28	,	radius:	radiusFactor*	2	,	color:	0x7a605f	,	index:	5	}	,	//	tree red
{	x:	-6.66	,	y:	0	,	z:	-1*	277.84	,	radius:	radiusFactor*	4	,	color:	0x3c533f	,	index:	6	}	,	//	tree green
{	x:	-9.06	,	y:	0	,	z:	-1*	276.86	,	radius:	radiusFactor*	1	,	color:	0x668d58	,	index:	7	}	,	//	hedge green
																							
// block 2																							
{	x:	-7.56	,	y:	0	,	z:	-1*	289.26	,	radius:	radiusFactor*	2	,	color:	0x9a8550	,	index:	8	}	,	//	statue gold
{	x:	-8.26	,	y:	0	,	z:	-1*	287.97	,	radius:	radiusFactor*	1	,	color:	0x575e7b	,	index:	9	}	,	//	stone beige
{	x:	-5.89	,	y:	0	,	z:	-1*	288.27	,	radius:	radiusFactor*	2	,	color:	0x496aa0	,	index:	10	}	,	//	pavement grey
																							
// block 3																							
{	x:	-15.38	,	y:	0	,	z:	-1*	280.69	,	radius:	radiusFactor*	6	,	color:	0xc2c2c2	,	index:	11	}	,	//	plaza beige
{	x:	-13.19	,	y:	0	,	z:	-1*	278.74	,	radius:	radiusFactor*	2	,	color:	0x759183	,	index:	12	}	,	//	plaza green
{	x:	-13.68	,	y:	0	,	z:	-1*	277.34	,	radius:	radiusFactor*	3	,	color:	0x1b3769	,	index:	13	}	,	//	plaza blue
{	x:	-15.87	,	y:	0	,	z:	-1*	276.66	,	radius:	radiusFactor*	2	,	color:	0x060608	,	index:	14	}	,	//	plaza black
{	x:	-20.35	,	y:	0	,	z:	-1*	278.73	,	radius:	radiusFactor*	6	,	color:	0xc2c2c2	,	index:	15	}	,	//	laza beige
{	x:	-19.39	,	y:	0	,	z:	-1*	282.16	,	radius:	radiusFactor*	3	,	color:	0x1b3769	,	index:	16	}	,	//	plaza blue
{	x:	-21.73	,	y:	0	,	z:	-1*	282	    ,	radius:	radiusFactor*	2	,	color:	0x759183	,	index:	17	}	,	//	plaza green
{	x:	-23.27	,	y:	0	,	z:	-1*	282.74	,	radius:	radiusFactor*	2	,	color:	0x060608	,	index:	18	}	,	//	plaza black
{	x:	-24.2	,	y:	0	,	z:	-1*	276.77	,	radius:	radiusFactor*	3	,	color:	0x6b5a60	,	index:	19	}	,	//	brick red
{	x:	-22.55	,	y:	1	,	z:	-1*	276.14	,	radius:	radiusFactor*	1	,	color:	0xb7c1c0	,	index:	20	}	,	//	brick bldg beige
{	x:	-27.3	,	y:	0	,	z:	-1*	277.84	,	radius:	radiusFactor*	4	,	color:	0xb0b7bf	,	index:	21	}	,	//	park lane beige
{	x:	-25.61	,	y:	0	,	z:	-1*	279.65	,	radius:	radiusFactor*	3	,	color:	0x6d8cab	,	index:	22	}	,	//	park lane glass blue
{	x:	-25.8	,	y:	0	,	z:	-1*	281.9	,	radius:	radiusFactor*	4	,	color:	0xb0b7bf	,	index:	23	}	,	//	park lane beige
{	x:	-28.42	,	y:	0	,	z:	-1*	281.67	,	radius:	radiusFactor*	3	,	color:	0x0e1027	,	index:	24	}	,	//	park lane glass black
{	x:	-30.63	,	y:	0	,	z:	-1*	279.69	,	radius:	radiusFactor*	4	,	color:	0x6d8cab	,	index:	25	}	,	//	park lane beige
{	x:	-29.53	,	y:	0	,	z:	-1*	276.91	,	radius:	radiusFactor*	2	,	color:	0x0e1027	,	index:	26	}	,	//	park lane black
{	x:	-31.16	,	y:	0	,	z:	-1*	276.66	,	radius:	radiusFactor*	1.5	,	color:	0x96c7f0	,	index:	27	}	,	//	geom white
{	x:	-34.39	,	y:	0	,	z:	-1*	278.2	,	radius:	radiusFactor*	6	,	color:	0xaab6c6	,	index:	28	}	,	//	geom bldg beige
{	x:	-40.66	,	y:	0	,	z:	-1*	276.17	,	radius:	radiusFactor*	2	,	color:	0xb3daf7	,	index:	29	}	,	//	quality meats white
{	x:	-40.9	,	y:	0	,	z:	-1*	280.84	,	radius:	radiusFactor*	2	,	color:	0x246579	,	index:	30	}	,	//	scaffolding green
{	x:	-41.44	,	y:	1	,	z:	-1*	282.43	,	radius:	radiusFactor*	1	,	color:	0x1a3059	,	index:	31	}	,	//	tall bldg blue
{	x:	-40.12	,	y:	0	,	z:	-1*	282.91	,	radius:	radiusFactor*	2	,	color:	0x88a3c0	,	index:	32	}	,	//	tall bldg white
{	x:	-37.54	,	y:	0	,	z:	-1*	282.26	,	radius:	radiusFactor*	4	,	color:	0xa1a5b0	,	index:	33	}	,	//	tall bldg beige
{	x:	-34.03	,	y:	0	,	z:	-1*	282.33	,	radius:	radiusFactor*	4	,	color:	0xbecee5	,	index:	34	}	,	//	mid bldg white beige
{	x:	-30.96	,	y:	0	,	z:	-1*	282.62	,	radius:	radiusFactor*	3	,	color:	0x85858f	,	index:	35	}	,	//	mid bldg dark beige
{	x:	-17.7	,	y:	0	,	z:	-1*	276.67	,	radius:	radiusFactor*	2	,	color:	0x81a6d3	,	index:	36	}	,	//	plaza shops white
{	x:	-39.1	,	y:	0	,	z:	-1*	278.35	,	radius:	radiusFactor*	5	,	color:	0x44384e	,	index:	37	}	,	//	scaffolding brown

// block 5																							
{	x:	-13.74	,	y:	0	,	z:	-1*	90.84	,	radius:	radiusFactor*	10	,	color:	0xb3a38c	,	index:	38	}	,	//	library beige
{	x:	-7.51	,	y:	0	,	z:	-1*	95.76	,	radius:	radiusFactor*	6	,	color:	0x6b5b4b	,	index:	39	}	,	//	library beige
{	x:	-7.31	,	y:	0	,	z:	-1*	90.38	,	radius:	radiusFactor*	5	,	color:	0xd1c7ae	,	index:	40	}	,	//	library beige
{	x:	-6.66	,	y:	0	,	z:	-1*	99.14	,	radius:	radiusFactor*	3	,	color:	0xe7db6d	,	index:	41	}	,	//	tree yellow
{	x:	-9.29	,	y:	0	,	z:	-1*	100.03	,	radius:	radiusFactor*	3	,	color:	0x604c34	,	index:	42	}	,	//	tree brown
{	x:	-5.4	,	y:	0	,	z:	-1*	101.65	,	radius:	radiusFactor*	3	,	color:	0x0d0d0f	,	index:	43	}	,	//	library black
{	x:	-7.9	,	y:	0	,	z:	-1*	102.51	,	radius:	radiusFactor*	3	,	color:	0x4478db	,	index:	44	}	,	//	kiosk blue
{	x:	-10.28	,	y:	0	,	z:	-1*	102.79	,	radius:	radiusFactor*	2	,	color:	0x121a1c	,	index:	45	}	,	//	kiosk black
{	x:	-11.79	,	y:	0	,	z:	-1*	102.89	,	radius:	radiusFactor*	1	,	color:	0x8f1d12	,	index:	46	}	,	//	lib flag red
{	x:	-8.93	,	y:	0	,	z:	-1*	87.2	,	radius:	radiusFactor*	3	,	color:	0x0f1722	,	index:	47	}	,	//	scaffolding black
{	x:	-6.51	,	y:	0	,	z:	-1*	87.06	,	radius:	radiusFactor*	2	,	color:	0x8c2923	,	index:	48	}	,	//	scaffolding orange
{	x:	-22.58	,	y:	0	,	z:	-1*	97.08	,	radius:	radiusFactor*	10	,	color:	0xfadb29	,	index:	49	}	,	//	tree yellow
{	x:	-30.08	,	y:	0	,	z:	-1*	93.17	,	radius:	radiusFactor*	8	,	color:	0xf7bb4d	,	index:	50	}	,	//	tree yellow
{	x:	-24.57	,	y:	0	,	z:	-1*	89.62	,	radius:	radiusFactor*	6	,	color:	0xf7bb4d	,	index:	51	}	,	//	tree brown
{	x:	-35.32	,	y:	0	,	z:	-1*	97.15	,	radius:	radiusFactor*	6	,	color:	0x6d5c42	,	index:	52	}	,	//	tree brown
{	x:	-27.23	,	y:	0	,	z:	-1*	100.92	,	radius:	radiusFactor*	3	,	color:	0x1c4475	,	index:	53	}	,	//	ice skate blue
{	x:	-29.05	,	y:	0	,	z:	-1*	98.65	,	radius:	radiusFactor*	4	,	color:	0xc7d8e2	,	index:	54	}	,	//	ice skate white
{	x:	-30.17	,	y:	0	,	z:	-1*	101.19	,	radius:	radiusFactor*	2	,	color:	0xc5d3dc	,	index:	55	}	,	//	ice skate white
{	x:	-31.67	,	y:	0	,	z:	-1*	102.3	,	radius:	radiusFactor*	2	,	color:	0x446432	,	index:	56	}	,	//	hedge green
{	x:	-32.65	,	y:	0	,	z:	-1*	99.8	,	radius:	radiusFactor*	4	,	color:	0x416740	,	index:	57	}	,	//	wrought iron green
{	x:	-35.08	,	y:	0	,	z:	-1*	101.89	,	radius:	radiusFactor*	3	,	color:	0x08090d	,	index:	58	}	,	//	wrought iron black
{	x:	-38.08	,	y:	0	,	z:	-1*	100.75	,	radius:	radiusFactor*	4	,	color:	0x839f86	,	index:	59	}	,	//	roof green
{	x:	-39.12	,	y:	0	,	z:	-1*	97.52	,	radius:	radiusFactor*	2	,	color:	0x68c7e5	,	index:	60	}	,	//	roof blue
{	x:	-37.97	,	y:	0	,	z:	-1*	94.39	,	radius:	radiusFactor*	2	,	color:	0x446432	,	index:	61	}	,	//	hedge green
{	x:	-35.7	,	y:	0	,	z:	-1*	92.55	,	radius:	radiusFactor*	4	,	color:	0xb5b4af	,	index:	62	}	,	//	flooring wood beige
{	x:	-38.06	,	y:	0	,	z:	-1*	89.65	,	radius:	radiusFactor*	4	,	color:	0xb9a58d	,	index:	63	}	,	//	fountain beige
{	x:	-36.46	,	y:	0	,	z:	-1*	86.96	,	radius:	radiusFactor*	4	,	color:	0xe7383d	,	index:	64	}	,	//	roof ref
{	x:	-34.34	,	y:	0	,	z:	-1*	89.39	,	radius:	radiusFactor*	4	,	color:	0x416740	,	index:	65	}	,	//	wrought iron green
{	x:	-31.37	,	y:	0	,	z:	-1*	88.22	,	radius:	radiusFactor*	3	,	color:	0x08090d	,	index:	66	}	,	//	wrought iron black
{	x:	-28.59	,	y:	0	,	z:	-1*	87.94	,	radius:	radiusFactor*	3	,	color:	0x845b47	,	index:	67	}	,	//	flooring wood brown
{	x:	-20.15	,	y:	0	,	z:	-1*	89.45	,	radius:	radiusFactor*	4	,	color:	0x99a5a5	,	index:	68	}	,	//	roof white
{	x:	-14.3	,	y:	0	,	z:	-1*	99.37	,	radius:	radiusFactor*	8	,	color:	0xd1c7ae	,	index:	69	}	,	//	library beige

// block 8																							
{	x:	3.52	,	y:	0	,	z:	-1*	-155.98	,	radius:	radiusFactor*	3	,	color:	0xd5ae77	,	index:	70	}	,	//	façade beige
{	x:	4.9	    ,	y:	0	,	z:	-1*	-154.93	,	radius:	radiusFactor*	1	,	color:	0x353a3e	,	index:	71	}	,	//	metal brown
{	x:	5.77	,	y:	0	,	z:	-1*	-154.57	,	radius:	radiusFactor*	1	,	color:	0xc6ddef	,	index:	72	}	,	//	fire escape white
{	x:	6.03	,	y:	0	,	z:	-1*	-156.49	,	radius:	radiusFactor*	3	,	color:	0xd5ae77	,	index:	73	}	,	//	façade beige
{	x:	2.33	,	y:	0	,	z:	-1*	-157.53	,	radius:	radiusFactor*	1.5	,	color:	0x05080d	,	index:	74	}	,	//	metal black
{	x:	4.58	,	y:	0	,	z:	-1*	-159.74	,	radius:	radiusFactor*	5	,	color:	0xa55146	,	index:	75	}	,	//	brick red
{	x:	8.69	,	y:	0	,	z:	-1*	-158.54	,	radius:	radiusFactor*	4	,	color:	0xd5b493	,	index:	76	}	,	//	façade light beige
{	x:	7.45	,	y:	0	,	z:	-1*	-160.88	,	radius:	radiusFactor*	1.5	,	color:	0x05080d	,	index:	77	}	,	//	metal black
{	x:	9.91	,	y:	0	,	z:	-1*	-156.18	,	radius:	radiusFactor*	1.5	,	color:	0x0d1836	,	index:	78	}	,	//	metal black
{	x:	12.36	,	y:	0	,	z:	-1*	-157.27	,	radius:	radiusFactor*	4	,	color:	0xeddcc2	,	index:	79	}	,	//	façade light beige
{	x:	13.4	,	y:	0	,	z:	-1*	-154.98	,	radius:	radiusFactor*	2	,	color:	0x2c465d	,	index:	80	}	,	//	scaffolding green
{	x:	12.11	,	y:	0	,	z:	-1*	-160.11	,	radius:	radiusFactor*	2	,	color:	0x689b9e	,	index:	81	}	,	//	ny green
{	x:	14.44	,	y:	0	,	z:	-1*	-159.68	,	radius:	radiusFactor*	3	,	color:	0xa7a7a7	,	index:	82	}	,	//	façade beige
{	x:	15.6	,	y:	0	,	z:	-1*	-156.77	,	radius:	radiusFactor*	4	,	color:	0x222836	,	index:	83	}	,	//	scaffolding black
{	x:	17.17	,	y:	0	,	z:	-1*	-159.83	,	radius:	radiusFactor*	3	,	color:	0xa7a7a7	,	index:	84	}	,	//	façade beige
{	x:	19.25	,	y:	0	,	z:	-1*	-157.11	,	radius:	radiusFactor*	5	,	color:	0xd0ccc3	,	index:	85	}	,	//	façade beige
{	x:	19.54	,	y:	0	,	z:	-1*	-160.47	,	radius:	radiusFactor*	2	,	color:	0x2b474b	,	index:	86	}	,	//	scaffolding green
{	x:	21.29	,	y:	0	,	z:	-1*	-160.77	,	radius:	radiusFactor*	2	,	color:	0x874d4b	,	index:	87	}	,	//	brick red
{	x:	21.79	,	y:	0	,	z:	-1*	-158.98	,	radius:	radiusFactor*	2	,	color:	0x2a6ca9	,	index:	88	}	,	//	window blue
{	x:	22.18	,	y:	0	,	z:	-1*	-157.38	,	radius:	radiusFactor*	1	,	color:	0xb41823	,	index:	89	}	,	//	mcd red
{	x:	21.79	,	y:	0	,	z:	-1*	-155.77	,	radius:	radiusFactor*	2	,	color:	0x101825	,	index:	90	}	,	//	façade black
																							
// block 9																							
{	x:	2.29	,	y:	0	,	z:	-1*	-165.37	,	radius:	radiusFactor*	1.5	,	color:	0x373634	,	index:	91	}	,	//	scaffolding black
{	x:	4.75	,	y:	0	,	z:	-1*	-165.7	,	radius:	radiusFactor*	4	,	color:	0xcbb590	,	index:	92	}	,	//	façade beige
{	x:	2.39	,	y:	0	,	z:	-1*	-167.03	,	radius:	radiusFactor*	2	,	color:	0x44705f	,	index:	93	}	,	//	scaffolding green
{	x:	4.74	,	y:	0	,	z:	-1*	-169.37	,	radius:	radiusFactor*	5	,	color:	0xfff3d6	,	index:	94	}	,	//	façade beige
{	x:	2.45	,	y:	0	,	z:	-1*	-171.66	,	radius:	radiusFactor*	3	,	color:	0x74a9eb	,	index:	95	}	,	//	poster blue
{	x:	6.31	,	y:	0	,	z:	-1*	-171.81	,	radius:	radiusFactor*	2	,	color:	0x8db2a1	,	index:	96	}	,	//	ny green
{	x:	8.36	,	y:	0	,	z:	-1*	-170.65	,	radius:	radiusFactor*	3	,	color:	0x413c42	,	index:	97	}	,	//	brick brown
{	x:	7.47	,	y:	0	,	z:	-1*	-164.64	,	radius:	radiusFactor*	1	,	color:	0x44705f	,	index:	98	}	,	//	scaffolding green
{	x:	9.29	,	y:	0	,	z:	-1*	-165.98	,	radius:	radiusFactor*	3	,	color:	0x373634	,	index:	99	}	,	//	scaffolding black
{	x:	10.92	,	y:	0	,	z:	-1*	-168.76	,	radius:	radiusFactor*	4	,	color:	0x825157	,	index:	100	}	,	//	brick red
{	x:	11.43	,	y:	0	,	z:	-1*	-164.94	,	radius:	radiusFactor*	2	,	color:	0x0a0d12	,	index:	101	}	,	//	metal black
{	x:	14.06	,	y:	0	,	z:	-1*	-164.61	,	radius:	radiusFactor*	1.5	,	color:	0x03060b	,	index:	102	}	,	//	shadow black
{	x:	11.61	,	y:	0	,	z:	-1*	-171.3	,	radius:	radiusFactor*	1.5	,	color:	0x03060b	,	index:	103	}	,	//	shadow black
{	x:	13.09	,	y:	0	,	z:	-1*	-166.46	,	radius:	radiusFactor*	3	,	color:	0xcda25d	,	index:	104	}	,	//	façade dark beige
{	x:	14.48	,	y:	0	,	z:	-1*	-170.06	,	radius:	radiusFactor*	5	,	color:	0x9a9084	,	index:	105	}	,	//	façade dark beige
{	x:	16.37	,	y:	0	,	z:	-1*	-165.95	,	radius:	radiusFactor*	4	,	color:	0xd3c0af	,	index:	106	}	,	//	façade light beige
{	x:	18.54	,	y:	1	,	z:	-1*	-169.6	,	radius:	radiusFactor*	6	,	color:	0xd8d5c4	,	index:	107	}	,	//	façade light beige
{	x:	21.87	,	y:	2	,	z:	-1*	-171.38	,	radius:	radiusFactor*	2	,	color:	0x102f44	,	index:	108	}	,	//	scaffolding green
{	x:	21.56	,	y:	3	,	z:	-1*	-167.42	,	radius:	radiusFactor*	3	,	color:	0xb5a595	,	index:	109	}	,	//	façade dark beige
{	x:	21.74	,	y:	4	,	z:	-1*	-165.07	,	radius:	radiusFactor*	2	,	color:	0x6fb1eb	,	index:	110	}	,	//	chase light blue
{	x:	19.61	,	y:	5	,	z:	-1*	-165.35	,	radius:	radiusFactor*	3	,	color:	0x145475	,	index:	111	}	,	//	chase blue
{	x:	18.04	,	y:	6	,	z:	-1*	-164.2	,	radius:	radiusFactor*	1	,	color:	0x708572	,	index:	112	}	,	//	ny green
																							
// block 10																							
{	x:	5.01	,	y:	0	,	z:	-1*	-176.49	,	radius:	radiusFactor*	4	,	color:	0xcfae83	,	index:	113	}	,	//	façade beige
{	x:	2.29	,	y:	0	,	z:	-1*	-177.45	,	radius:	radiusFactor*	2	,	color:	0x202125	,	index:	114	}	,	//	façade black
{	x:	4.27	,	y:	0	,	z:	-1*	-180.19	,	radius:	radiusFactor*	5	,	color:	0xf2e9d8	,	index:	115	}	,	//	façade light beige
{	x:	2.3	    ,	y:	0	,	z:	-1*	-182.2	,	radius:	radiusFactor*	1	,	color:	0x0e62b8	,	index:	116	}	,	//	chase blue
{	x:	9.16	,	y:	0	,	z:	-1*	-179.54	,	radius:	radiusFactor*	6	,	color:	0xf2e9d8	,	index:	117	}	,	//	façade light beige
{	x:	11.84	,	y:	0	,	z:	-1*	-182.34	,	radius:	radiusFactor*	2	,	color:	0x0d1927	,	index:	118	}	,	//	façade black
{	x:	14.29	,	y:	0	,	z:	-1*	-179.89	,	radius:	radiusFactor*	5	,	color:	0xdbc8a7	,	index:	119	}	,	//	façade light beige
{	x:	16.91	,	y:	0	,	z:	-1*	-181.75	,	radius:	radiusFactor*	2	,	color:	0x0d1927	,	index:	120	}	,	//	façade black
{	x:	18.89	,	y:	0	,	z:	-1*	-179.16	,	radius:	radiusFactor*	5	,	color:	0xdbc8a7	,	index:	121	}	,	//	façade light beige
{	x:	21.23	,	y:	0	,	z:	-1*	-181.48	,	radius:	radiusFactor*	2	,	color:	0x8792a8	,	index:	122	}	,	//	façade white
{	x:	21.95	,	y:	0	,	z:	-1*	-179.66	,	radius:	radiusFactor*	2	,	color:	0xbf1112	,	index:	123	}	,	//	staples red
{	x:	21.25	,	y:	0	,	z:	-1*	-176.22	,	radius:	radiusFactor*	3	,	color:	0x3f99cd	,	index:	124	}	,	//	glass blue
{	x:	18.77	,	y:	0	,	z:	-1*	-175.84	,	radius:	radiusFactor*	2	,	color:	0x3f99cd	,	index:	125	}	,	//	metal black
{	x:	16.45	,	y:	0	,	z:	-1*	-176.82	,	radius:	radiusFactor*	3	,	color:	0x3f99cd	,	index:	126	}	,	//	glass blue
{	x:	14.5	,	y:	0	,	z:	-1*	-175.58	,	radius:	radiusFactor*	2	,	color:	0x3f99cd	,	index:	127	}	,	//	metal black
{	x:	11.8	,	y:	0	,	z:	-1*	-176.5	,	radius:	radiusFactor*	4	,	color:	0x916a6b	,	index:	128	}	,	//	brick red
{	x:	8.41	,	y:	0	,	z:	-1*	-176.15	,	radius:	radiusFactor*	3	,	color:	0x916a6b	,	index:	129	}	,	//	brick red

// block 14																							
{	x:	25.34	,	y:	0	,	z:	-1*	-158.54	,	radius:	radiusFactor*	2	,	color:	0x06090e	,	index:	130	}	,	//	iron black
{	x:	27.48	,	y:	0	,	z:	-1*	-156.7	,	radius:	radiusFactor*	4	,	color:	0xb0b1b5	,	index:	131	}	,	//	pavement light grey
{	x:	30.39	,	y:	0	,	z:	-1*	-158.9	,	radius:	radiusFactor*	4	,	color:	0xb0b1b5	,	index:	132	}	,	//	pavement light grey
{	x:	27.11	,	y:	0	,	z:	-1*	-160.46	,	radius:	radiusFactor*	4	,	color:	0xb0b1b5	,	index:	133	}	,	//	pavement light grey
{	x:	29.73	,	y:	0	,	z:	-1*	-162.84	,	radius:	radiusFactor*	4	,	color:	0xb0b1b5	,	index:	134	}	,	//	pavement light grey
{	x:	26.98	,	y:	0	,	z:	-1*	-164.2	,	radius:	radiusFactor*	4	,	color:	0xb0b1b5	,	index:	135	}	,	//	pavement dark grey
{	x:	29.32	,	y:	0	,	z:	-1*	-166.42	,	radius:	radiusFactor*	4	,	color:	0xb0b1b5	,	index:	136	}	,	//	pavement dark grey
{	x:	26.51	,	y:	0	,	z:	-1*	-166.98	,	radius:	radiusFactor*	2	,	color:	0x244242	,	index:	137	}	,	//	subway green
{	x:	31.94	,	y:	0	,	z:	-1*	-169.12	,	radius:	radiusFactor*	4	,	color:	0xccb158	,	index:	138	}	,	//	tree yellow
{	x:	28.52	,	y:	0	,	z:	-1*	-170.24	,	radius:	radiusFactor*	4	,	color:	0x17271c	,	index:	139	}	,	//	tree green
{	x:	26.85	,	y:	0	,	z:	-1*	-172.87	,	radius:	radiusFactor*	3	,	color:	0x8a5e39	,	index:	140	}	,	//	market wood brown
{	x:	29.77	,	y:	0	,	z:	-1*	-172.97	,	radius:	radiusFactor*	3	,	color:	0xabb5bf	,	index:	141	}	,	//	market wood white
{	x:	28.07	,	y:	0	,	z:	-1*	-175.52	,	radius:	radiusFactor*	3	,	color:	0x21374c	,	index:	142	}	,	//	market wood green
{	x:	30.98	,	y:	0	,	z:	-1*	-175.57	,	radius:	radiusFactor*	3	,	color:	0x8a5e39	,	index:	143	}	,	//	market wood brown
{	x:	26.82	,	y:	0	,	z:	-1*	-178.59	,	radius:	radiusFactor*	4	,	color:	0x17271c	,	index:	144	}	,	//	tree green
{	x:	30.07	,	y:	0	,	z:	-1*	-178.07	,	radius:	radiusFactor*	3	,	color:	0xabb5bf	,	index:	145	}	,	//	market wood white
{	x:	30.12	,	y:	0	,	z:	-1*	-180.86	,	radius:	radiusFactor*	3	,	color:	0x8a5e39	,	index:	146	}	,	//	market wood brown
{	x:	27.36	,	y:	0	,	z:	-1*	-181.51	,	radius:	radiusFactor*	3	,	color:	0x21374c	,	index:	147	}	,	//	market wood green

// block 15																							
{	x:	-15.63	,	y:	0	,	z:	-1*	-264.09	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	148	}	,	//	iron black
{	x:	-10.88	,	y:	0	,	z:	-1*	-126.52	,	radius:	radiusFactor*	6	,	color:	0xe29a45	,	index:	149	}	,	//	tree orange
{	x:	-18.05	,	y:	0	,	z:	-1*	-269.38	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	150	}	,	//	iron black
{	x:	-13.69	,	y:	0	,	z:	-1*	-268.46	,	radius:	radiusFactor*	6	,	color:	0x294627	,	index:	151	}	,	//	tree green
{	x:	-8.69	,	y:	0	,	z:	-1*	-269.62	,	radius:	radiusFactor*	6	,	color:	0x5b402d	,	index:	152	}	,	//	tree brown
{	x:	-4.76	,	y:	0	,	z:	-1*	-265.74	,	radius:	radiusFactor*	8	,	color:	0xb4a6a5	,	index:	153	}	,	//	arc beige
{	x:	-0.22	,	y:	0	,	z:	-1*	-269.97	,	radius:	radiusFactor*	8	,	color:	0x294627	,	index:	154	}	,	//	tree green
{	x:	1.27	,	y:	0	,	z:	-1*	-264.51	,	radius:	radiusFactor*	6	,	color:	0xb4a6a5	,	index:	155	}	,	//	arc beige
{	x:	6.84	,	y:	0	,	z:	-1*	-266.33	,	radius:	radiusFactor*	6	,	color:	0x873b1b	,	index:	156	}	,	//	tree red
{	x:	5.3	    ,	y:	0	,	z:	-1*	-271.25	,	radius:	radiusFactor*	6	,	color:	0x5b402d	,	index:	157	}	,	//	tree brown
{	x:	11	    ,	y:	0	,	z:	-1*	-266.34	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	158	}	,	//	iron black
{	x:	10.53	,	y:	0	,	z:	-1*	-270.77	,	radius:	radiusFactor*	6	,	color:	0xead73b	,	index:	159	}	,	//	tree yellow
{	x:	14.71	,	y:	0	,	z:	-1*	-270.25	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	160	}	,	//	iron black
{	x:	14.2	,	y:	0	,	z:	-1*	-274.65	,	radius:	radiusFactor*	6	,	color:	0xe29a45	,	index:	161	}	,	//	tree orange
{	x:	12.83	,	y:	0	,	z:	-1*	-278.58	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	162	}	,	//	iron black
{	x:	8.09	,	y:	0	,	z:	-1*	-276.76	,	radius:	radiusFactor*	8	,	color:	0xead73b	,	index:	163	}	,	//	tree yellow
{	x:	3.61	,	y:	0	,	z:	-1*	-279.6	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	164	}	,	//	iron black
{	x:	0.44	,	y:	0	,	z:	-1*	-275.78	,	radius:	radiusFactor*	8	,	color:	0x294627	,	index:	165	}	,	//	tree green
{	x:	-5.13	,	y:	0	,	z:	-1*	-272.92	,	radius:	radiusFactor*	6	,	color:	0x5b402d	,	index:	166	}	,	//	tree brown
{	x:	-5.35	,	y:	0	,	z:	-1*	-277.67	,	radius:	radiusFactor*	6	,	color:	0xead73b	,	index:	167	}	,	//	tree yellow
{	x:	-10.67	,	y:	0	,	z:	-1*	-277.61	,	radius:	radiusFactor*	6	,	color:	0x873b1b	,	index:	168	}	,	//	tree red
{	x:	-15.24	,	y:	0	,	z:	-1*	-273.9	,	radius:	radiusFactor*	8	,	color:	0xead73b	,	index:	169	}	,	//	tree yellow
{	x:	-18.75	,	y:	0	,	z:	-1*	-277.24	,	radius:	radiusFactor*	4	,	color:	0x0b0704	,	index:	170	}	,	//	iron black
																							
// block 16																							
{	x:	-19.48	,	y:	0	,	z:	-1*	-284.76	,	radius:	radiusFactor*	5	,	color:	0x663d39	,	index:	171	}	,	//	brick red
{	x:	-18.19	,	y:	0	,	z:	-1*	-282.28	,	radius:	radiusFactor*	1	,	color:	0x263089	,	index:	172	}	,	//	nyu purple
{	x:	-16.93	,	y:	0	,	z:	-1*	-282.99	,	radius:	radiusFactor*	2	,	color:	0x9e9fa1	,	index:	173	}	,	//	window white
{	x:	-15.57	,	y:	0	,	z:	-1*	-285.77	,	radius:	radiusFactor*	5	,	color:	0x663d39	,	index:	174	}	,	//	brick red
																							
// block 17																							
{	x:	-9.37	,	y:	0	,	z:	-1*	-285.57	,	radius:	radiusFactor*	5	,	color:	0xab9d90	,	index:	175	}	,	//	church beige
{	x:	-7.45	,	y:	0	,	z:	-1*	-283.13	,	radius:	radiusFactor*	2	,	color:	0xa7c8db	,	index:	176	}	,	//	stone white
{	x:	-5.42	,	y:	0	,	z:	-1*	-285.03	,	radius:	radiusFactor*	4	,	color:	0xab9d90	,	index:	177	}	,	//	church beige
{	x:	-6.03	,	y:	0	,	z:	-1*	-282.74	,	radius:	radiusFactor*	1	,	color:	0x61333e	,	index:	178	}	,	//	roof red
																							
// block 18																							
{	x:	4.09	,	y:	0	,	z:	-1*	-286.99	,	radius:	radiusFactor*	4	,	color:	0xbeb4a8	,	index:	179	}	,	//	façade beige
{	x:	0.48	,	y:	0	,	z:	-1*	-285.2	,	radius:	radiusFactor*	5	,	color:	0x928386	,	index:	180	}	,	//	façade red
{	x:	3.54	,	y:	0	,	z:	-1*	-284.15	,	radius:	radiusFactor*	3	,	color:	0x499ed5	,	index:	181	}	,	//	window blue
																							
// block 19																							
{	x:	8.69	,	y:	0	,	z:	-1*	-284.39	,	radius:	radiusFactor*	2	,	color:	0x151d28	,	index:	182	}	,	//	façade black
{	x:	10.65	,	y:	0	,	z:	-1*	-287.52	,	radius:	radiusFactor*	6	,	color:	0x8a5452	,	index:	183	}	,	//	sandstone red
{	x:	14.16	,	y:	0	,	z:	-1*	-286.64	,	radius:	radiusFactor*	4	,	color:	0x8a5452	,	index:	184	}	,	//	sandstone red
{	x:	12.88	,	y:	0	,	z:	-1*	-284.29	,	radius:	radiusFactor*	2	,	color:	0x151d28	,	index:	185	}	,	//	façade black
{	x:	11.5	,	y:	0	,	z:	-1*	-284.18	,	radius:	radiusFactor*	1	,	color:	0xc4c8cb	,	index:	186	}	,	//	statue beige

// block		22	,	W 58-57																			
{	x:	-5.42	,	y:	0	,	z:	-1*	272.95	,	radius:	radiusFactor*	2	,	color:	0x618083	,	index:	187	}	,	//	ny green
{	x:	-8.68	,	y:	0	,	z:	-1*	269.79	,	radius:	radiusFactor*	8	,	color:	0x8f969c	,	index:	188	}	,	//	façade beige
{	x:	-5.57	,	y:	0	,	z:	-1*	266.8	,	radius:	radiusFactor*	3	,	color:	0x0f1724	,	index:	189	}	,	//	door black
																							
// block		23	,	E 58-57																			
{	x:	0.25	,	y:	0	,	z:	-1*	272.31	,	radius:	radiusFactor*	3	,	color:	0x08090e	,	index:	190	}	,	//	door black
{	x:	2.85	,	y:	0	,	z:	-1*	268.84	,	radius:	radiusFactor*	8	,	color:	0x968f89	,	index:	191	}	,	//	façade beige
																							
// block		24	,	W 57-56																			
{	x:	-6.02	,	y:	0	,	z:	-1*	261.24	,	radius:	radiusFactor*	2	,	color:	0x384954	,	index:	192	}	,	//	scaffolding green
{	x:	-8.41	,	y:	0	,	z:	-1*	259.9	,	radius:	radiusFactor*	4	,	color:	0x14191c	,	index:	193	}	,	//	façade black
{	x:	-5.56	,	y:	0	,	z:	-1*	259.09	,	radius:	radiusFactor*	3	,	color:	0xf3be6d	,	index:	194	}	,	//	light gold
{	x:	-7.31	,	y:	0	,	z:	-1*	255.77	,	radius:	radiusFactor*	6	,	color:	0xa29b91	,	index:	195	}	,	//	façade beige
{	x:	-5.51	,	y:	0	,	z:	-1*	254.01	,	radius:	radiusFactor*	2	,	color:	0x5ea49c	,	index:	196	}	,	//	ny green
																							
// block		25	,	E 57-56																			
{	x:	1.8	    ,	y:	0	,	z:	-1*	259.88	,	radius:	radiusFactor*	4	,	color:	0x5e91d3	,	index:	197	}	,	//	poster blue
{	x:	0.44	,	y:	0	,	z:	-1*	256.75	,	radius:	radiusFactor*	3	,	color:	0x818590	,	index:	198	}	,	//	façade beige
{	x:	3.34	,	y:	0	,	z:	-1*	255.14	,	radius:	radiusFactor*	4	,	color:	0x7c8184	,	index:	199	}	,	//	grey blue glass
																							
// block		26	,	W 56-55																			
{	x:	-8.31	,	y:	0	,	z:	-1*	248.4	,	radius:	radiusFactor*	6	,	color:	0xafaea9	,	index:	200	}	,	//	façade beige
{	x:	-5.21	,	y:	0	,	z:	-1*	246.88	,	radius:	radiusFactor*	2	,	color:	0x9bcbcf	,	index:	201	}	,	//	ny green
{	x:	-6.24	,	y:	0	,	z:	-1*	244.53	,	radius:	radiusFactor*	4	,	color:	0x8b8284	,	index:	202	}	,	//	church brick red
																							
// block		27	,	E 56-55																			
{	x:	1.45	,	y:	0	,	z:	-1*	249.3	,	radius:	radiusFactor*	4	,	color:	0x589fcd	,	index:	203	}	,	//	glass blue
{	x:	-0.22	,	y:	0	,	z:	-1*	247.04	,	radius:	radiusFactor*	2	,	color:	0xdaa139	,	index:	204	}	,	//	light gold
{	x:	2.53	,	y:	0	,	z:	-1*	245.1	,	radius:	radiusFactor*	5	,	color:	0xacb3bc	,	index:	205	}	,	//	façade beige
																							
// block		28	,	W 55-54																			
{	x:	-8.63	,	y:	0	,	z:	-1*	236.58	,	radius:	radiusFactor*	9	,	color:	0xa59b8c	,	index:	206	}	,	//	façade beige
																							
// block		29	,	E 55-54																			
{	x:	2.09	,	y:	0	,	z:	-1*	238.95	,	radius:	radiusFactor*	4	,	color:	0xaab1c1	,	index:	207	}	,	//	façade beige
{	x:	0.76	,	y:	0	,	z:	-1*	236.01	,	radius:	radiusFactor*	3	,	color:	0x050c12	,	index:	208	}	,	//	façade black
{	x:	2.25	,	y:	0	,	z:	-1*	233.87	,	radius:	radiusFactor*	3	,	color:	0x919294	,	index:	209	}	,	//	façade beige
																							
// block		30	,	W 54-53																			
{	x:	-9.43	,	y:	0	,	z:	-1*	226.85	,	radius:	radiusFactor*	8	,	color:	0x969495	,	index:	210	}	,	//	façade beige
{	x:	-6.03	,	y:	0	,	z:	-1*	223.83	,	radius:	radiusFactor*	4	,	color:	0x17333f	,	index:	211	}	,	//	scaffolding green
																							
// block		31	,																				
{	x:	2.26	,	y:	0	,	z:	-1*	227.65	,	radius:	radiusFactor*	6	,	color:	0x131c36	,	index:	212	}	,	//	scaffolding green
{	x:	0.15	,	y:	0	,	z:	-1*	224.54	,	radius:	radiusFactor*	2	,	color:	0x244f71	,	index:	213	}	,	//	scaffolding black
{	x:	2.8	    ,	y:	0	,	z:	-1*	223.76	,	radius:	radiusFactor*	4	,	color:	0xc0a9a1	,	index:	213	}	,	//	façade white beige
																							
// block		32	,	W 53-52																			
{	x:	-8.84	,	y:	0	,	z:	-1*	216.38	,	radius:	radiusFactor*	8	,	color:	0x4a8bcb	,	index:	215	}	,	//	blue glass
{	x:	-5.93	,	y:	0	,	z:	-1*	212.78	,	radius:	radiusFactor*	4	,	color:	0x3e566e	,	index:	216	}	,	//	scaffolding green
																							
// block		33	,	E 53-52																			
{	x:	0.23	,	y:	0	,	z:	-1*	218.83	,	radius:	radiusFactor*	2	,	color:	0x233645	,	index:	217	}	,	//	scaffolding green
{	x:	2.96	,	y:	0	,	z:	-1*	217.39	,	radius:	radiusFactor*	5	,	color:	0x1b2235	,	index:	218	}	,	//	scaffolding black
{	x:	1.41	,	y:	0	,	z:	-1*	213.58	,	radius:	radiusFactor*	5	,	color:	0xd9d7ca	,	index:	219	}	,	//	façade beige
																							
// block		34	,	W 52-51																			
{	x:	-7.48	,	y:	0	,	z:	-1*	206.84	,	radius:	radiusFactor*	6	,	color:	0x1d2236	,	index:	220	}	,	//	glass black
{	x:	-6.05	,	y:	0	,	z:	-1*	202.9	,	radius:	radiusFactor*	4	,	color:	0xb2a088	,	index:	221	}	,	//	façade beige
																							
// block		35	,	E 52-51																			
{	x:	0.34	,	y:	0	,	z:	-1*	208.57	,	radius:	radiusFactor*	2	,	color:	0xffca60	,	index:	222	}	,	//	cartier gold
{	x:	2.99	,	y:	0	,	z:	-1*	207.68	,	radius:	radiusFactor*	4	,	color:	0x939da6	,	index:	223	}	,	//	façade beige
{	x:	0.18	,	y:	0	,	z:	-1*	206.37	,	radius:	radiusFactor*	3	,	color:	0xa02f43	,	index:	224	}	,	//	cartier red
{	x:	2.35	,	y:	0	,	z:	-1*	203.76	,	radius:	radiusFactor*	5	,	color:	0x11151e	,	index:	225	}	,	//	glass black
																							
// block		36	,	W 51-50																			
{	x:	-8.3	,	y:	0	,	z:	-1*	194.92	,	radius:	radiusFactor*	9	,	color:	0x9b825a	,	index:	226	}	,	//	façade beige
																							
// block		37	,	E 51-50																			
{	x:	3.62	,	y:	0	,	z:	-1*	195.02	,	radius:	radiusFactor*	9	,	color:	0xa3958a	,	index:	227	}	,	//	façade beige
																							
// block		38	,	W 50-49																			
{	x:	-8.19	,	y:	0	,	z:	-1*	184.43	,	radius:	radiusFactor*	9	,	color:	0x9b825a	,	index:	228	}	,	//	façade beige
																							
// block		39	,	E 50-49																			
{	x:	1.08	,	y:	0	,	z:	-1*	187.32	,	radius:	radiusFactor*	4	,	color:	0x19241e	,	index:	229	}	,	//	façade black
{	x:	3.75	,	y:	0	,	z:	-1*	183.72	,	radius:	radiusFactor*	8	,	color:	0xb8b7b5	,	index:	230	}	,	//	façade beige
																							
// block		40	,	W 49-48																			
{	x:	-6.74	,	y:	0	,	z:	-1*	176.11	,	radius:	radiusFactor*	5	,	color:	0x19191b	,	index:	231	}	,	//	scaffolding black
{	x:	-6.18	,	y:	0	,	z:	-1*	172.11	,	radius:	radiusFactor*	5	,	color:	0x91908c	,	index:	232	}	,	//	façade beige
																							
// block		41	,	E 49-48																			
{	x:	0.73	,	y:	0	,	z:	-1*	176.89	,	radius:	radiusFactor*	3	,	color:	0x0a0e0f	,	index:	233	}	,	//	façade black
{	x:	4.2	    ,	y:	0	,	z:	-1*	174.55	,	radius:	radiusFactor*	6	,	color:	0x948f8c	,	index:	234	}	,	//	façade beige
{	x:	2.33	,	y:	0	,	z:	-1*	171.79	,	radius:	radiusFactor*	3	,	color:	0x0a0d12	,	index:	235	}	,	//	façade black
																							
// block		42	,	W 48-47																			
{	x:	-6.49	,	y:	0	,	z:	-1*	166.17	,	radius:	radiusFactor*	4	,	color:	0x607b96	,	index:	236	}	,	//	façade grey
{	x:	-4.59	,	y:	0	,	z:	-1*	163.96	,	radius:	radiusFactor*	2	,	color:	0x799eb9	,	index:	237	}	,	//	scaffolding white
{	x:	-7.39	,	y:	0	,	z:	-1*	162.02	,	radius:	radiusFactor*	5	,	color:	0xc0b19e	,	index:	238	}	,	//	façade beige
																							
// block		43	,	E 48-47																			
{	x:	0.76	,	y:	0	,	z:	-1*	166.85	,	radius:	radiusFactor*	2	,	color:	0x1e2225	,	index:	239	}	,	//	façade black
{	x:	3.42	,	y:	0	,	z:	-1*	165.7	,	radius:	radiusFactor*	4	,	color:	0xacb9b2	,	index:	240	}	,	//	façade grey
{	x:	2.22	,	y:	0	,	z:	-1*	162.04	,	radius:	radiusFactor*	4	,	color:	0xcab8aa	,	index:	241	}	,	//	façade beige
																							
// block		44	,	W 47-46																			
{	x:	-5.2	,	y:	0	,	z:	-1*	156.33	,	radius:	radiusFactor*	3	,	color:	0x061115	,	index:	242	}	,	//	scaffolding black
{	x:	-8.09	,	y:	0	,	z:	-1*	154.52	,	radius:	radiusFactor*	5	,	color:	0xc7ac8f	,	index:	243	}	,	//	façade beige
																							
// block		45	,	E 47-46																			
{	x:	1.33	,	y:	0	,	z:	-1*	155.9	,	radius:	radiusFactor*	4	,	color:	0x81bae7	,	index:	244	}	,	//	façade white
{	x:	4.17	,	y:	0	,	z:	-1*	153.56	,	radius:	radiusFactor*	6	,	color:	0xc7aa8c	,	index:	245	}	,	//	façade beige
{	x:	0.98	,	y:	0	,	z:	-1*	150.67	,	radius:	radiusFactor*	4	,	color:	0x121619	,	index:	246	}	,	//	glass black
																							
// block		46	,	W 46-45																			
{	x:	-5.22	,	y:	0	,	z:	-1*	145.83	,	radius:	radiusFactor*	3	,	color:	0x10171f	,	index:	247	}	,	//	façade black
{	x:	-8.42	,	y:	0	,	z:	-1*	144.58	,	radius:	radiusFactor*	3	,	color:	0xd1bba3	,	index:	248	}	,	//	façade beige
{	x:	-6.02	,	y:	0	,	z:	-1*	140.92	,	radius:	radiusFactor*	5	,	color:	0x1f2227	,	index:	249	}	,	//	glass black
																							
// block		47	,	E 46-45																			
{	x:	1.15	,	y:	0	,	z:	-1*	145.83	,	radius:	radiusFactor*	3	,	color:	0xe9a32a	,	index:	250	}	,	//	light gold
{	x:	4.91	,	y:	0	,	z:	-1*	142.36	,	radius:	radiusFactor*	8	,	color:	0x8c7e71	,	index:	251	}	,	//	façade beige
																							
// block		48	,	W 45-44																			
{	x:	-7.97	,	y:	0	,	z:	-1*	132.55	,	radius:	radiusFactor*	9	,	color:	0xd0b089	,	index:	252	}	,	//	façade beige
																							
// block		49	,	E 45-44																			
{	x:	5.25	,	y:	0	,	z:	-1*	132.53	,	radius:	radiusFactor*	8	,	color:	0x836e5d	,	index:	253	}	,	//	façade beige
{	x:	1.17	,	y:	0	,	z:	-1*	130	    ,	radius:	radiusFactor*	3	,	color:	0x14151a	,	index:	254	}	,	//	façade black
																							
// block		50	,	W 44-43																			
{	x:	-8.38	,	y:	0	,	z:	-1*	123.28	,	radius:	radiusFactor*	6	,	color:	0xa7a098	,	index:	255	}	,	//	façade beige
{	x:	-5.7	,	y:	0	,	z:	-1*	119.7	,	radius:	radiusFactor*	4	,	color:	0xa4b1ba	,	index:	256	}	,	//	façade white

// block		51	,	E 44-43																			
{	x:	2.79	,	y:	0	,	z:	-1*	123.45	,	radius:	radiusFactor*	6	,	color:	0x0f1314	,	index:	257	}	,	//	façade black
{	x:	4.29	,	y:	0	,	z:	-1*	119.85	,	radius:	radiusFactor*	4	,	color:	0x919a9f	,	index:	258	}	,	//	façade grey
																							
// block		52	,	W 43-42																			
{	x:	-8.35	,	y:	0	,	z:	-1*	113.49	,	radius:	radiusFactor*	4	,	color:	0x04070c	,	index:	259	}	,	//	façade black
{	x:	-5.36	,	y:	0	,	z:	-1*	112.87	,	radius:	radiusFactor*	3	,	color:	0xe3ba60	,	index:	260	}	,	//	light yellow
{	x:	-6.86	,	y:	0	,	z:	-1*	110.04	,	radius:	radiusFactor*	4	,	color:	0xbcb9b4	,	index:	261	}	,	//	façade beige
																							
// block		53	,	E 43-42																			
{	x:	3.9	    ,	y:	0	,	z:	-1*	113.6	,	radius:	radiusFactor*	5	,	color:	0xb5a689	,	index:	262	}	,	//	façade beige
{	x:	1.06	,	y:	0	,	z:	-1*	111.73	,	radius:	radiusFactor*	3	,	color:	0x304f54	,	index:	263	}	,	//	scaffolding green
{	x:	3.07	,	y:	0	,	z:	-1*	109.52	,	radius:	radiusFactor*	4	,	color:	0x5ca0d1	,	index:	264	}	,	//	glass blue
																							
// block		6	,	W 40-39	E42-41																		
{	x:	2.29	,	y:	0	,	z:	-1*	102.36	,	radius:	radiusFactor*	4	,	color:	0xa5998d	,	index:	265	}	,	//	façade beige
{	x:	3.88	,	y:	0	,	z:	-1*	99.17	,	radius:	radiusFactor*	4	,	color:	0x141c1f	,	index:	266	}	,	//	glass black
{	x:	1.46	,	y:	0	,	z:	-1*	97.15	,	radius:	radiusFactor*	3	,	color:	0x634938	,	index:	267	}	,	//	brick red
																							
// block		7	,	E 41-40																			
{	x:	2.24	,	y:	0	,	z:	-1*	91.96	,	radius:	radiusFactor*	4	,	color:	0x9f7b59	,	index:	268	}	,	//	façade dark beige
{	x:	4.2	    ,	y:	0	,	z:	-1*	87.91	,	radius:	radiusFactor*	6	,	color:	0xcdc1a9	,	index:	269	}	,	//	façade beige
																							
// block		54	,	W 40-39																			
{	x:	-5.68	,	y:	0	,	z:	-1*	81.93	,	radius:	radiusFactor*	4	,	color:	0x8e877f	,	index:	270	}	,	//	façade beige
{	x:	-7.78	,	y:	0	,	z:	-1*	78.33	,	radius:	radiusFactor*	7	,	color:	0x383f52	,	index:	271	}	,	//	glass black
																							
// block		55	,	E 40-39																			
{	x:	2.55	,	y:	0	,	z:	-1*	80.74	,	radius:	radiusFactor*	6	,	color:	0xc5b39b	,	index:	272	}	,	//	façade beige
{	x:	3.45	,	y:	0	,	z:	-1*	76.68	,	radius:	radiusFactor*	4	,	color:	0x152034	,	index:	273	}	,	//	glass black
																							
// block		56	,	W 39-38																			
{	x:	-5.17	,	y:	0	,	z:	-1*	70.88	,	radius:	radiusFactor*	3	,	color:	0x3b6861	,	index:	274	}	,	//	scaffolding green
{	x:	-9.87	,	y:	0	,	z:	-1*	68.71	,	radius:	radiusFactor*	8	,	color:	0x1f2a40	,	index:	275	}	,	//	scaffolding black
																							
// block		57	,	E 39-38																			
{	x:	1.86	,	y:	0	,	z:	-1*	71.31	,	radius:	radiusFactor*	4	,	color:	0x685f58	,	index:	276	}	,	//	façade dark beige
{	x:	4.14	,	y:	0	,	z:	-1*	67.56	,	radius:	radiusFactor*	6	,	color:	0xc3b6a5	,	index:	277	}	,	//	façade beige
																							
// block		58	,	W 38-37																			
{	x:	-7.46	,	y:	0	,	z:	-1*	60.05	,	radius:	radiusFactor*	6	,	color:	0x2e82ca	,	index:	278	}	,	//	glass blue
{	x:	-5.21	,	y:	0	,	z:	-1*	56.21	,	radius:	radiusFactor*	4	,	color:	0x8b705d	,	index:	279	}	,	//	façade dark beige
																							
// block		59	,	E 38-37																			
{	x:	5.35	,	y:	0	,	z:	-1*	59.16	,	radius:	radiusFactor*	8	,	color:	0xb3ad9f	,	index:	280	}	,	//	façade beige
{	x:	1.77	,	y:	0	,	z:	-1*	55.93	,	radius:	radiusFactor*	3	,	color:	0x2e424b	,	index:	281	}	,	//	scaffolding green
																							
// block		60	,	W 37-36																			
{	x:	-5.63	,	y:	0	,	z:	-1*	50.01	,	radius:	radiusFactor*	6	,	color:	0xada49f	,	index:	282	}	,	//	façade beige
{	x:	-7.92	,	y:	0	,	z:	-1*	46.78	,	radius:	radiusFactor*	6	,	color:	0x559cd4	,	index:	283	}	,	//	glass blue
																							
// block		61	,	E 37-36																			
{	x:	3.98	,	y:	0	,	z:	-1*	48.37	,	radius:	radiusFactor*	8	,	color:	0xab9b84	,	index:	284	}	,	//	façade beige
																							
// block		62	,	W 36-35																			
{	x:	-7.6	,	y:	0	,	z:	-1*	38.81	,	radius:	radiusFactor*	7	,	color:	0xc1b399	,	index:	285	}	,	//	façade beige
{	x:	-4.73	,	y:	0	,	z:	-1*	35.43	,	radius:	radiusFactor*	3	,	color:	0x82d1ff	,	index:	286	}	,	//	glass blue
																							
// block		63	,	E 36-35																			
{	x:	1.76	,	y:	0	,	z:	-1*	40.97	,	radius:	radiusFactor*	2	,	color:	0x9fa8b1	,	index:	287	}	,	//	façade white
{	x:	5.09	,	y:	0	,	z:	-1*	38.94	,	radius:	radiusFactor*	6	,	color:	0x99928c	,	index:	288	}	,	//	façade beige
{	x:	1.98	,	y:	0	,	z:	-1*	35.91	,	radius:	radiusFactor*	3	,	color:	0x2f3237	,	index:	289	}	,	//	façade black
																							
// block		64	,	W 35-34																			
{	x:	-7.65	,	y:	0	,	z:	-1*	28.32	,	radius:	radiusFactor*	8	,	color:	0xe7dfca	,	index:	290	}	,	//	façade beige
{	x:	-4.64	,	y:	0	,	z:	-1*	25.17	,	radius:	radiusFactor*	3	,	color:	0x6fa9b5	,	index:	291	}	,	//	ny green
																							
// block		65	,	E 35-34																			
{	x:	4.33	,	y:	0	,	z:	-1*	27.94	,	radius:	radiusFactor*	8	,	color:	0xb4ada7	,	index:	292	}	,	//	façade beige
																							
// block		66	,	W 34-33																			
{	x:	-7.59	,	y:	0	,	z:	-1*	17.28	,	radius:	radiusFactor*	7	,	color:	0xc3b9af	,	index:	293	}	,	//	façade beige
{	x:	-5.16	,	y:	0	,	z:	-1*	13.61	,	radius:	radiusFactor*	5	,	color:	0x3682ce	,	index:	294	}	,	//	glass blue
																							
// block		67	,	E 34-33																			
{	x:	3.08	,	y:	0	,	z:	-1*	17.47	,	radius:	radiusFactor*	6	,	color:	0x868583	,	index:	295	}	,	//	façade dark beige
{	x:	3.58	,	y:	0	,	z:	-1*	13.31	,	radius:	radiusFactor*	4	,	color:	0xa9adb0	,	index:	296	}	,	//	façade light beige
																							
// block		68	,	W 33-32																			
{	x:	-6.96	,	y:	0	,	z:	-1*	5.76	,	radius:	radiusFactor*	8	,	color:	0xb2b2aa	,	index:	297	}	,	//	façade dark beige
																							
// block		69	,	E 33-32																			
{	x:	2.9	    ,	y:	0	,	z:	-1*	7.52	,	radius:	radiusFactor*	5	,	color:	0x89735e	,	index:	298	}	,	//	façade beige
{	x:	4.2	    ,	y:	0	,	z:	-1*	3.86	,	radius:	radiusFactor*	5	,	color:	0x61a8dc	,	index:	299	}	,	//	glass blue
																							
// block		70	,	W 32-31																			
{	x:	-6.09	,	y:	0	,	z:	-1*	-2.97	,	radius:	radiusFactor*	6	,	color:	0x4e4341	,	index:	300	}	,	//	brick red
																							
// block		71	,	E 32-31																			
{	x:	2.36	,	y:	0	,	z:	-1*	-1.68	,	radius:	radiusFactor*	3	,	color:	0xb3b8bb	,	index:	301	}	,	//	façade light beige
{	x:	3.67	,	y:	0	,	z:	-1*	-4.29	,	radius:	radiusFactor*	4	,	color:	0x389ae3	,	index:	302	}	,	//	glass blue
{	x:	2.35	,	y:	0	,	z:	-1*	-7.26	,	radius:	radiusFactor*	4	,	color:	0x8c7f77	,	index:	303	}	,	//	façade dark beige
																							
// block		72	,	W 31-30																			
{	x:	-5.27	,	y:	0	,	z:	-1*	-12.54	,	radius:	radiusFactor*	4	,	color:	0x705e5e	,	index:	304	}	,	//	brick red
{	x:	-7.04	,	y:	0	,	z:	-1*	-16.46	,	radius:	radiusFactor*	6	,	color:	0x938874	,	index:	305	}	,	//	façade beige
																							
// block		73	,	E 31-30																			
{	x:	3.08	,	y:	0	,	z:	-1*	-13.32	,	radius:	radiusFactor*	4	,	color:	0xa19181	,	index:	306	}	,	//	façade light beige
{	x:	6.01	,	y:	0	,	z:	-1*	-15.57	,	radius:	radiusFactor*	6	,	color:	0x64635f	,	index:	307	}	,	//	façade dark beige
																							
// block		74	,	W 30-29																			
{	x:	-7	    ,	y:	0	,	z:	-1*	-24.08	,	radius:	radiusFactor*	7	,	color:	0xb1a992	,	index:	308	}	,	//	façade beige
{	x:	-4.43	,	y:	0	,	z:	-1*	-27.94	,	radius:	radiusFactor*	4	,	color:	0x4f787c	,	index:	309	}	,	//	ny green
																							
// block		75	,	E 30-29																			
{	x:	4.53	,	y:	0	,	z:	-1*	-23.46	,	radius:	radiusFactor*	5	,	color:	0x3b8fcd	,	index:	301	}	,	//	glass blue
{	x:	2.14	,	y:	0	,	z:	-1*	-26.05	,	radius:	radiusFactor*	3	,	color:	0x402a2c	,	index:	311	}	,	//	façade black
{	x:	5.29	,	y:	0	,	z:	-1*	-27.42	,	radius:	radiusFactor*	4	,	color:	0x715b5d	,	index:	312	}	,	//	brick red
																							
// block		76	,	W 29-28																			
{	x:	-5.93	,	y:	0	,	z:	-1*	-33.78	,	radius:	radiusFactor*	6	,	color:	0x9a9182	,	index:	313	}	,	//	façade beige
																							
// block		77	,	E 29-28																			
{	x:	2.15	,	y:	0	,	z:	-1*	-32.69	,	radius:	radiusFactor*	3	,	color:	0xdcded3	,	index:	314	}	,	//	façade white
{	x:	6.33	,	y:	0	,	z:	-1*	-35.97	,	radius:	radiusFactor*	8	,	color:	0xcdc1ab	,	index:	315	}	,	//	façade beige
																							
// block		78	,	W 28-27																			
{	x:	-5.72	,	y:	0	,	z:	-1*	-43.33	,	radius:	radiusFactor*	4	,	color:	0x8d5146	,	index:	316	}	,	//	brick red
{	x:	-3.46	,	y:	0	,	z:	-1*	-44.78	,	radius:	radiusFactor*	2	,	color:	0x516870	,	index:	317	}	,	//	ny green
{	x:	-5.68	,	y:	0	,	z:	-1*	-47.5	,	radius:	radiusFactor*	6	,	color:	0x8f8b83	,	index:	318	}	,	//	façade beige
																							
// block		79	,	E 28-27																			
{	x:	4.91	,	y:	0	,	z:	-1*	-44.03	,	radius:	radiusFactor*	5	,	color:	0xa2907c	,	index:	319	}	,	//	façade dark beige
{	x:	1.85	,	y:	0	,	z:	-1*	-46.07	,	radius:	radiusFactor*	3	,	color:	0x9f9b92	,	index:	320	}	,	//	façade white
{	x:	4.31	,	y:	0	,	z:	-1*	-48.08	,	radius:	radiusFactor*	4	,	color:	0x8f8583	,	index:	321	}	,	//	façade light beige
																							
// block		80	,	W 27-26																			
{	x:	-4.15	,	y:	0	,	z:	-1*	-54.09	,	radius:	radiusFactor*	4	,	color:	0x786d4f	,	index:	322	}	,	//	façade dark beige
{	x:	-7.31	,	y:	0	,	z:	-1*	-56.25	,	radius:	radiusFactor*	6	,	color:	0xdfd9cb	,	index:	323	}	,	//	façade light beige
{	x:	-3.87	,	y:	0	,	z:	-1*	-58.56	,	radius:	radiusFactor*	4	,	color:	0xb8a898	,	index:	324	}	,	//	façade beige
																							
// block		81	,	E 27-26																			
{	x:	2.1	    ,	y:	0	,	z:	-1*	-53.3	,	radius:	radiusFactor*	3	,	color:	0x494e4a	,	index:	325	}	,	//	scaffolding green
{	x:	5.71	,	y:	0	,	z:	-1*	-56.69	,	radius:	radiusFactor*	8	,	color:	0x31343d	,	index:	326	}	,	//	scaffolding black
																							
// block		82	,	W 26-25																			
{	x:	-5.99	,	y:	0	,	z:	-1*	-64.83	,	radius:	radiusFactor*	7	,	color:	0xc7bdb0	,	index:	327	}	,	//	façade light beige
{	x:	-4.25	,	y:	0	,	z:	-1*	-69.37	,	radius:	radiusFactor*	4	,	color:	0x907a62	,	index:	328	}	,	//	façade dark beige
																							
// block		112	,	W 25-24																			
{	x:	-10.07	,	y:	0	,	z:	-1*	-74.37	,	radius:	radiusFactor*	4	,	color:	0x86786d	,	index:	329	}	,	//	façade dark beige
{	x:	-7.75	,	y:	0	,	z:	-1*	-75.23	,	radius:	radiusFactor*	2	,	color:	0x0d1218	,	index:	330	}	,	//	façade black
{	x:	-7.47	,	y:	0	,	z:	-1*	-78.9	,	radius:	radiusFactor*	6	,	color:	0xb2aea5	,	index:	331	}	,	//	façade light beige
																							
// block		113	,	W 24-23																			
{	x:	-4.05	,	y:	0	,	z:	-1*	-84.05	,	radius:	radiusFactor*	3	,	color:	0x111518	,	index:	332	}	,	//	façade black
{	x:	-7.28	,	y:	0	,	z:	-1*	-87.48	,	radius:	radiusFactor*	8	,	color:	0xb7b2af	,	index:	333	}	,	//	façade beige
																							
// block		83	,	Madison Square Park																			
{	x:	6.02	,	y:	0	,	z:	-1*	-65.01	,	radius:	radiusFactor*	6	,	color:	0x5f7441	,	index:	334	}	,	//	tree green
{	x:	4.47	,	y:	0	,	z:	-1*	-70.26	,	radius:	radiusFactor*	6	,	color:	0x393631	,	index:	335	}	,	//	tree brown
{	x:	9.26	,	y:	0	,	z:	-1*	-72.97	,	radius:	radiusFactor*	6	,	color:	0xe28734	,	index:	336	}	,	//	tree orange
{	x:	3.09	,	y:	0	,	z:	-1*	-73.74	,	radius:	radiusFactor*	4	,	color:	0x722b15	,	index:	337	}	,	//	tree red
{	x:	10.18	,	y:	0	,	z:	-1*	-78.04	,	radius:	radiusFactor*	6	,	color:	0xe28734	,	index:	338	}	,	//	tree orange
{	x:	5.17	,	y:	0	,	z:	-1*	-77.12	,	radius:	radiusFactor*	6	,	color:	0x5f7441	,	index:	339	}	,	//	tree green
{	x:	2.62	,	y:	0	,	z:	-1*	-81.29	,	radius:	radiusFactor*	2	,	color:	0xee252d	,	index:	340	}	,	//	eataly red
{	x:	4.5	    ,	y:	0	,	z:	-1*	-81.52	,	radius:	radiusFactor*	2	,	color:	0xf3598b	,	index:	341	}	,	//	eataly pink
{	x:	3.56	,	y:	0	,	z:	-1*	-84.47	,	radius:	radiusFactor*	4	,	color:	0xecc15b	,	index:	342	}	,	//	umbrella yellow
{	x:	6.97	,	y:	0	,	z:	-1*	-82.9	,	radius:	radiusFactor*	6	,	color:	0x5f7441	,	index:	343	}	,	//	tree red
{	x:	11.61	,	y:	0	,	z:	-1*	-83.01	,	radius:	radiusFactor*	4	,	color:	0x5f7441	,	index:	344	}	,	//	tree green
{	x:	8.03	,	y:	0	,	z:	-1*	-86.83	,	radius:	radiusFactor*	6	,	color:	0x393631	,	index:	345	}	,	//	tree brown
																							
// block		84	,	W 23-22																			
{	x:	-5.06	,	y:	0	,	z:	-1*	-96.33	,	radius:	radiusFactor*	4	,	color:	0x8d4a44	,	index:	346	}	,	//	brick red
{	x:	-3.27	,	y:	0	,	z:	-1*	-98.62	,	radius:	radiusFactor*	2	,	color:	0x191c23	,	index:	347	}	,	//	façade black
{	x:	-5.79	,	y:	0	,	z:	-1*	-100.64	,	radius:	radiusFactor*	5	,	color:	0xa7a09e	,	index:	348	}	,	//	façade beige
																							
// block		111	,	Flatiron																			
{	x:	1.85	,	y:	0	,	z:	-1*	-96.14	,	radius:	radiusFactor*	2	,	color:	0x304442	,	index:	349	}	,	//	scaffolding green
{	x:	3.67	,	y:	0	,	z:	-1*	-95.86	,	radius:	radiusFactor*	2	,	color:	0x000004	,	index:	350	}	,	//	scaffolding black
{	x:	3.35	,	y:	0	,	z:	-1*	-99.1	,	radius:	radiusFactor*	5	,	color:	0xe9d8be	,	index:	351	}	,	//	façade beige
{	x:	1.77	,	y:	0	,	z:	-1*	-101.77	,	radius:	radiusFactor*	2	,	color:	0x000004	,	index:	352	}	,	//	scaffolding black
{	x:	3.67	,	y:	0	,	z:	-1*	-102.31	,	radius:	radiusFactor*	2	,	color:	0x304442	,	index:	353	}	,	//	scaffolding green
{	x:	5.46	,	y:	0	,	z:	-1*	-101.69	,	radius:	radiusFactor*	2	,	color:	0x000004	,	index:	354	}	,	//	scaffolding black
																							
// block		86	,	W 22-21																			
{	x:	-6.19	,	y:	0	,	z:	-1*	-106.33	,	radius:	radiusFactor*	3	,	color:	0x9d948b	,	index:	355	}	,	//	façade beige
{	x:	-3.99	,	y:	0	,	z:	-1*	-107.11	,	radius:	radiusFactor*	2	,	color:	0x0e1422	,	index:	356	}	,	//	scaffolding black
{	x:	-3.88	,	y:	0	,	z:	-1*	-109.8	,	radius:	radiusFactor*	4	,	color:	0x9e7b5d	,	index:	357	}	,	//	brick red
{	x:	-6.03	,	y:	0	,	z:	-1*	-112.09	,	radius:	radiusFactor*	3	,	color:	0x9d948b	,	index:	358	}	,	//	façade beige
																							
// block		87	,	E 22-21																			
{	x:	5.43	,	y:	0	,	z:	-1*	-107.58	,	radius:	radiusFactor*	5	,	color:	0xd2ba94	,	index:	359	}	,	//	façade beige
{	x:	2.32	,	y:	0	,	z:	-1*	-108.59	,	radius:	radiusFactor*	2	,	color:	0x0f1217	,	index:	360	}	,	//	façade black
{	x:	3.6	    ,	y:	0	,	z:	-1*	-111.36	,	radius:	radiusFactor*	4	,	color:	0xcecabe	,	index:	361	}	,	//	façade light beige
																							
// block		88	,	W 21-20																			
{	x:	-6.4	,	y:	0	,	z:	-1*	-118.08	,	radius:	radiusFactor*	6	,	color:	0xa7a29e	,	index:	362	}	,	//	façade beige
{	x:	-4.04	,	y:	0	,	z:	-1*	-121.4	,	radius:	radiusFactor*	4	,	color:	0xbdb8b7	,	index:	363	}	,	//	façade white
																							
// block		89	,	E21-20																			
{	x:	2.24	,	y:	0	,	z:	-1*	-116.1	,	radius:	radiusFactor*	2	,	color:	0x07080d	,	index:	364	}	,	//	façade black
{	x:	4.93	,	y:	0	,	z:	-1*	-117.65	,	radius:	radiusFactor*	5	,	color:	0xd2cdba	,	index:	365	}	,	//	façade beige
{	x:	2.49	,	y:	0	,	z:	-1*	-120.53	,	radius:	radiusFactor*	3	,	color:	0xd6c1a2	,	index:	366	}	,	//	façade orange beige
{	x:	4.85	,	y:	0	,	z:	-1*	-121.55	,	radius:	radiusFactor*	3	,	color:	0xc2b5a5	,	index:	367	}	,	//	façade red beige
																							
// block		90	,	W 20-19																			
{	x:	-4.3	,	y:	0	,	z:	-1*	-126.69	,	radius:	radiusFactor*	4	,	color:	0x78454e	,	index:	362	}	,	//	brick red
{	x:	-5.1	,	y:	0	,	z:	-1*	-130.38	,	radius:	radiusFactor*	5	,	color:	0xb6987c	,	index:	363	}	,	//	façade beige
																							
// block		91	,	E 20-19																			
{	x:	4.33	,	y:	0	,	z:	-1*	-126.96	,	radius:	radiusFactor*	5	,	color:	0xdcccb2	,	index:	370	}	,	//	façade beige
{	x:	3.91	,	y:	0	,	z:	-1*	-130.58	,	radius:	radiusFactor*	5	,	color:	0xe0d5b9	,	index:	371	}	,	//	façade beige
																							
// block		92	,	W 19-18																			
{	x:	-6.22	,	y:	0	,	z:	-1*	-137.55	,	radius:	radiusFactor*	6	,	color:	0xbbaea5	,	index:	372	}	,	//	façade beige
{	x:	-3.09	,	y:	0	,	z:	-1*	-140.21	,	radius:	radiusFactor*	3	,	color:	0x6e99ac	,	index:	373	}	,	//	ny green
{	x:	-5.27	,	y:	0	,	z:	-1*	-141.58	,	radius:	radiusFactor*	3	,	color:	0x99abb7	,	index:	374	}	,	//	scaffolding white
																							
// // block		93	,	E 19-18																			
// {	x:	3.75	,	y:	0	,	z:	-1*	-136.64	,	radius:	radiusFactor*	5	,	color:	0xd7d6c4	,	index:	375	}	,	//	façade beige
// {	x:	4.12	,	y:	0	,	z:	-1*	-140.49	,	radius:	radiusFactor*	5	,	color:	0xc9c1b4	,	index:	376	}	,	//	façade beige
																							
// // block		94	,	W 18-17																			
// {	x:	-5.27	,	y:	0	,	z:	-1*	-145.5	,	radius:	radiusFactor*	3	,	color:	0x38474e	,	index:	377	}	,	//	scaffolding green
// {	x:	-2.98	,	y:	0	,	z:	-1*	-147.55	,	radius:	radiusFactor*	3	,	color:	0xbbc0c3	,	index:	378	}	,	//	scaffolding white
// {	x:	-6.86	,	y:	0	,	z:	-1*	-149.49	,	radius:	radiusFactor*	3	,	color:	0x0a0d12	,	index:	379	}	,	//	façade black
// {	x:	-2.92	,	y:	0	,	z:	-1*	-151.53	,	radius:	radiusFactor*	7	,	color:	0xbeb5ac	,	index:	380	}	,	//	façade beige
																							
// // block		95	,	E 18-17																			
// {	x:	2.27	,	y:	0	,	z:	-1*	-145.74	,	radius:	radiusFactor*	3	,	color:	0x0a0d12	,	index:	381	}	,	//	façade black
// {	x:	6.14	,	y:	0	,	z:	-1*	-149.07	,	radius:	radiusFactor*	8	,	color:	0xe8d5b7	,	index:	382	}	,	//	façade beige
																							
// // block		11	,	W 17-16																			
// {	x:	-6.67	,	y:	0	,	z:	-1*	-157.5	,	radius:	radiusFactor*	8	,	color:	0xa69d8e	,	index:	383	}	,	//	façade beige
// {	x:	-3.43	,	y:	0	,	z:	-1*	-160.69	,	radius:	radiusFactor*	3	,	color:	0x6f8c92	,	index:	384	}	,	//	ny green
																							
// // block		12	,	W 16-15																			
// {	x:	-5.78	,	y:	0	,	z:	-1*	-165.83	,	radius:	radiusFactor*	4	,	color:	0xb2b3b7	,	index:	385	}	,	//	façade dark beige
// {	x:	-3.03	,	y:	0	,	z:	-1*	-166.56	,	radius:	radiusFactor*	2	,	color:	0x0a131c	,	index:	386	}	,	//	roof black
// {	x:	-4.46	,	y:	0	,	z:	-1*	-169.53	,	radius:	radiusFactor*	5	,	color:	0xb0aa94	,	index:	387	}	,	//	façade beige
																							
// // block		13	,	W 15-14																			
// {	x:	-7.15	,	y:	0	,	z:	-1*	-179.02	,	radius:	radiusFactor*	8	,	color:	0xdcd6ca	,	index:	388	}	,	//	façade beige
// {	x:	-3.07	,	y:	0	,	z:	-1*	-176.18	,	radius:	radiusFactor*	2	,	color:	0x090a0c	,	index:	389	}	,	//	façade black
// {	x:	-3.13	,	y:	0	,	z:	-1*	-181.88	,	radius:	radiusFactor*	2	,	color:	0x916052	,	index:	390	}	,	//	façade red
																							
// // block		96	,	W 14-13																			
// {	x:	-6.45	,	y:	0	,	z:	-1*	-190.99	,	radius:	radiusFactor*	8	,	color:	0xc4bca7	,	index:	391	}	,	//	façade beige
																							
// // block		97	,	E 14-13																			
// {	x:	6.38	,	y:	0	,	z:	-1*	-190.26	,	radius:	radiusFactor*	8	,	color:	0x60717e	,	index:	392	}	,	//	tns uc grey
// {	x:	3.2	    ,	y:	0	,	z:	-1*	-193.85	,	radius:	radiusFactor*	3	,	color:	0xa02c29	,	index:	393	}	,	//	tns red
																							
// // block		98	,	W 13-12																			
// {	x:	-6.51	,	y:	0	,	z:	-1*	-199.2	,	radius:	radiusFactor*	4	,	color:	0x9b5440	,	index:	394	}	,	//	brick red
// {	x:	-3.65	,	y:	0	,	z:	-1*	-199.78	,	radius:	radiusFactor*	2	,	color:	0x65a6c6	,	index:	395	}	,	//	ny green
// {	x:	-4.97	,	y:	0	,	z:	-1*	-203.38	,	radius:	radiusFactor*	6	,	color:	0xb6a394	,	index:	396	}	,	//	façade beige
																							
// // // block		99	,	E 13-12																			
// {	x:	5.56	,	y:	0	,	z:	-1*	-201.65	,	radius:	radiusFactor*	8	,	color:	0xffe198	,	index:	397	}	,	//	façade beige
																							
// // block		100	,	W 12-11																			
// {	x:	-6.3	,	y:	0	,	z:	-1*	-212.41	,	radius:	radiusFactor*	8	,	color:	0x715756	,	index:	398	}	,	//	brick dark red
																							
// // block		101	,	E 12-11																			
// {	x:	3.95	,	y:	0	,	z:	-1*	-210.19	,	radius:	radiusFactor*	5	,	color:	0x977367	,	index:	399	}	,	//	brick red
// {	x:	6.53	,	y:	0	,	z:	-1*	-213.55	,	radius:	radiusFactor*	4	,	color:	0x6d5257	,	index:	400	}	,	//	brick dark red
// {	x:	3.56	,	y:	0	,	z:	-1*	-214.88	,	radius:	radiusFactor*	4	,	color:	0xc2c8c4	,	index:	401	}	,	//	façade white
																							
// // block		102	,	W 11-10																			
// {	x:	-6.46	,	y:	0	,	z:	-1*	-221.43	,	radius:	radiusFactor*	2	,	color:	0xbbb8b3	,	index:	402	}	,	//	façade white
// {	x:	-2.88	,	y:	0	,	z:	-1*	-219.84	,	radius:	radiusFactor*	6	,	color:	0x744e4b	,	index:	403	}	,	//	brick red
// {	x:	-3.64	,	y:	0	,	z:	-1*	-225.01	,	radius:	radiusFactor*	4	,	color:	0x573d40	,	index:	404	}	,	//	brick dark red
																							
// // block		103	,	E 11-10																			
// {	x:	5.82	,	y:	0	,	z:	-1*	-222.35	,	radius:	radiusFactor*	8	,	color:	0xb18c72	,	index:	405	}	,	//	brick red
																							
// // block		104	,	W10-9																			
// {	x:	-3.64	,	y:	0	,	z:	-1*	-230.49	,	radius:	radiusFactor*	3	,	color:	0xa77c6c	,	index:	406	}	,	//	brick red
// {	x:	-4.3	,	y:	0	,	z:	-1*	-233.94	,	radius:	radiusFactor*	5	,	color:	0xae885b	,	index:	407	}	,	//	façade beige
																							
// // block		105	,	E 10-9																			
// {	x:	5.88	,	y:	0	,	z:	-1*	-232.29	,	radius:	radiusFactor*	7	,	color:	0x90756c	,	index:	408	}	,	//	brick dark red
// {	x:	3.16	,	y:	0	,	z:	-1*	-235.34	,	radius:	radiusFactor*	2	,	color:	0x9e9c73	,	index:	409	}	,	//	façade beige
																							
// // block		106	,	W 9-8																			
// {	x:	-4.88	,	y:	0	,	z:	-1*	-240.85	,	radius:	radiusFactor*	5	,	color:	0x60302c	,	index:	410	}	,	//	brick dark red
// {	x:	-2.99	,	y:	0	,	z:	-1*	-243.95	,	radius:	radiusFactor*	3	,	color:	0x7e554f	,	index:	411	}	,	//	brick light red
																							
// // block		107	,	E -8																			
// {	x:	5.85	,	y:	0	,	z:	-1*	-241.8	,	radius:	radiusFactor*	7	,	color:	0xaa936a	,	index:	412	}	,	//	façade beige
																							
// // block		108	,	W 8-WSN																			
// {	x:	-4.67	,	y:	0	,	z:	-1*	-252.77	,	radius:	radiusFactor*	8	,	color:	0xa19892	,	index:	413	}	,	//	façade beige
// {	x:	-3.08	,	y:	0	,	z:	-1*	-257.75	,	radius:	radiusFactor*	5	,	color:	0x623120	,	index:	414	}	,	//	brick red
																							
// // block		109 and 110	,	E 8-WSN																			
// {	x:	3.34	,	y:	0	,	z:	-1*	-251.29	,	radius:	radiusFactor*	5	,	color:	0xdfc297	,	index:	415	}	,	//	façade beige
// {	x:	1.91	,	y:	0	,	z:	-1*	-255.48	,	radius:	radiusFactor*	2	,	color:	0xfff4d7	,	index:	416	}	,	//	façade white
// {	x:	4.87	,	y:	0	,	z:	-1*	-258.01	,	radius:	radiusFactor*	6	,	color:	0x613231	,	index:	417	}	,	//	brick red

];