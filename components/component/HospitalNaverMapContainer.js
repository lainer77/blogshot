import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

import { makeStyles } from "@material-ui/styles";
import { Button as B } from "@material-ui/core";

const NaverMap = dynamic(
    () => import("react-naver-maps").then(Naver => Naver.NaverMap),
    {
        ssr: true
    }
);
const Marker = dynamic(
    () => import("react-naver-maps").then(Naver => Naver.Marker),
    {
        ssr: true
    }
);

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        padding: "20px"
    },
    map: {
        width: "100%",
        height: "460px",
        "& div": {
            left: "40%"
        }
    }
}));

const Button = styled(B)`
    && {
        width: 144px;
        height: 35px;
        color: ${props => props.color || "white"};
        background-color: ${props => props.bgc};
        font-size: "12px";
        letter-spacing: 0;
    }
`;
{
    /* <script
    async
    type="text/javascript"
    src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=l7atafik57"
/>; */
}
function ReviewContainer(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { data, handleAppMove, handleUrlCopy } = props;
    const [center, setCenter] = useState();
    const [map, setMap] = useState();
    useEffect(() => {
        setLoading(true);
    }, []);
    useEffect(() => {
        if (map) {
            let mapEl = document.getElementById(
                "maps-getting-started-controlled"
            );
            mapEl.children[0].style.left = "43%";
        }
    }, [map]);
    return (
        <div className={classes.root}>
            {data && data.geo_location && data.geo_location.lat ? (
                <NaverMap
                    id="maps-getting-started-controlled"
                    style={{
                        width: "100%",
                        height: "460px"
                    }}
                    defaultZoom={10}
                    center={data.geo_location}
                    naverRef={ref => setMap(ref)}
                    // pinchZoom={false}
                    // draggable={false}
                    // scrollWheel={false}
                    minZoom={10}
                    maxZoom={12}
                    tileSpare={10}
                    // onCenterChanged={center => setCenter(center)}
                    // scaleControl={false}
                >
                    {data.geo_location && window.naver ? (
                        <Marker
                            position={
                                new window.naver.maps.LatLng(
                                    center ? center.lat : data.geo_location.lat,
                                    center ? center.lng : data.geo_location.lng
                                )
                            }
                            onClick={e => {
                                alert(`여기는 ${data.name}입니다.`);
                            }}
                        />
                    ) : null}
                </NaverMap>
            ) : null}

            <div className={classes.buttons}>
                <Button bgc="rgb(41 41 41)" onClick={handleUrlCopy}>
                    URL 복사
                </Button>
                <span style={{ padding: "5px" }}></span>
                <Button bgc="rgb(13 211 44)" onClick={handleAppMove}>
                    네이버지도로 열기
                </Button>
            </div>
        </div>
    );
}

export default React.memo(ReviewContainer);
