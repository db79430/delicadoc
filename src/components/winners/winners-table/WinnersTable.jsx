import {CompactTable} from "@table-library/react-table-library/compact";
import {useTheme} from "@mui/material";
import {getTheme} from "@table-library/react-table-library/mantine";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getInfoPromoUsers} from "../../../redux/function/function-service";


export const WinnersTable = () => {
    const dispatch = useDispatch();
    // const promoUsers = useSelector((state) => state.infoPromo.promoUsers);
    const promoUsers = []
    console.log('promoUsers', promoUsers)

    // useEffect(() => {
    //     dispatch(getInfoPromoUsers(promoUsers));
    // }, []);

    const theme = useTheme(getTheme());
    const COLUMNS = [
        { label: 'Имя', renderCell: (item) => item.username },
        { label: 'Телефон', renderCell: (item) => item.phone},
        { label: 'Дата', renderCell: (item) => item.date},
        { label: 'Торговая сеть', renderCell: (item) => item.shop_img},
        { label: 'Приз', renderCell: (item) => item.img_gift && item.name_gift},
    ]

    console.log('data', promoUsers)

    return <CompactTable columns={COLUMNS} data={promoUsers} theme={theme}/>;

}