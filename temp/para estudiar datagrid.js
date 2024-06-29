Try adding valueFormatter property into createdAt field object as shown in the code below. This should solve your problem.

    const columns = [
    ...

        {
            field: 'createdAt',
            headerName: 'Join Date',
            width: 100,
            valueFormatter: params =>
                moment(params?.value).format("DD/MM/YYYY hh:mm A"),
        },

    ...
]
You can also find more about DataGrid cell customization in this document:

    https://mui.com/x/react-data-grid/column-definition/#rendering-cells