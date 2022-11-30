import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Background from "../public/background.png";
import Cz from "../public/cz.png";
import Sbf from "../public/sbf.png";
import Question from "../public/question.png";
import Nav from "../components/Nav";
import classNames from "classnames";
import { useRef, useEffect, useState } from "react";
import useNFTMint from "../hooks/useNFTMint";
// import useMediaQuery from "../hooks/useMediaQuery";

import {
  Container,
  Box,
  Text,
  Button,
  Stack,
  useMediaQuery,
  Image,
  Link,
  useBoolean,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  // index page content
  const czActive = useRef<HTMLImageElement>(null);
  const SbfActive = useRef<HTMLImageElement>(null);
  const BatActive = useRef<HTMLImageElement>(null);
  const BonkRef = useRef<HTMLButtonElement>(null);
  const [count, setCount] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/bonk.m4a") : undefined
  );

  // Mint
  const [pwd, setPwd] = useState("");
  const { freeMintAsync, isConnected } = useNFTMint(pwd);
  const [status, setStatus] = useState("done!");
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [mouseDownE, setMouseDownE] = useState(false);
  const [mouseUpE, setMouseUpE] = useState(false);
  const [flag, setFlag] = useBoolean();
  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    setTimeout(() => {
      setMouseUpE(true);
      console.log(mouseUpE);
    }, 10000);
  };

  useEffect(() => {
    setPwd("ToBonkOrNotToBonk");
  }, [status === "freeminting..."]);

  // Desktop - click func
  function mouseDown() {
    setMouseDownE(true);
    musicPlayers.current?.play();
    // if (czActive.current) {
    //   czActive.current.style.transform =
    //     "translateX(0) translateZ(1000px) rotateZ(5deg)";
    // }
    if (SbfActive.current) {
      SbfActive.current.style.height = "148px";
      SbfActive.current.style.top = "642px";
    }
    if (BatActive.current) {
      BatActive.current.style.transform = "rotate(80deg)";
    }
    if (BonkRef.current) {
      BonkRef.current.style.backgroundColor = "#13C4E6";
      BonkRef.current.style.color = "#ffffff";
    }
  }

  function mouseUp() {
    // if (czActive.current) {
    //   czActive.current.style.transform =
    //     "translateX(0) translateZ(0) rotateZ(0)";
    // }

    if (SbfActive.current) {
      SbfActive.current.style.height = "304px";
      SbfActive.current.style.top = "482px";
    }
    if (BatActive.current) {
      BatActive.current.style.transform = "rotate(0deg)";
    }
    if (BonkRef.current) {
      BonkRef.current.style.backgroundColor = "#ffffff";
      BonkRef.current.style.color = "#169bb4";
    }
  }

  // mobile - click on screen
  if (typeof window !== "undefined" && isMobile) {
    document.body.addEventListener("mousedown", mouseDown, true);
    document.body.addEventListener("mouseup", mouseUp, true);
  }

  return (
    <>
      <Container
        maxW="2000px"
        overflow="hidden"
        mt={isMobile ? "-48%" : 0}
        centerContent
      >
        <Box
          bgImage={`url(${Background.src})`}
          w="1944px"
          h="1094px"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          pos="relative"
        >
          <Nav></Nav>
          <Text
            className={styles["logo"]}
            data-stroke="CYBERBONK"
            fontSize={isMobile ? "60px" : "90px"}
          >
            CYBERBONK
          </Text>
          <Text className={styles["slogan"]}>
            BONK 1111 times to free mint NFT
          </Text>

          {/* -----↓↓↓↓ warnings ↓↓↓↓-----  */}
          {/* Risk spreading */}
          <Box>
            <Box className={classNames(styles["que5"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que5Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Risk spreading !</Text>
              <Text className={styles["queText__tw"]}>
                分散風險，雞蛋不要放在同個籃子裡
              </Text>
            </Box>
          </Box>
          {/* Key management */}
          <Box>
            <Box className={classNames(styles["que6"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que6Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Key management !</Text>
              <Text className={styles["queText__tw"]}>
                私鑰管理，擁有自己資產的私鑰控制權
              </Text>
            </Box>
          </Box>
          {/* Management ! */}
          <Box>
            <Box className={classNames(styles["que7"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que7Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Transparency !</Text>
              <Text className={styles["queText__tw"]}>
                透明化，資料放在公開的區塊鏈網路上
              </Text>
            </Box>
          </Box>
          {/* Management ! */}
          <Box>
            <Box className={classNames(styles["que8"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que8Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Management !</Text>
              <Text className={styles["queText__tw"]}>
                資產管理，不可挪用用戶資產
              </Text>
            </Box>
          </Box>
          {/* Audit procedure ! */}
          <Box>
            <Box className={classNames(styles["que9"], styles["que"])} p={5}>
              <Image src={Question.src} alt="" />
            </Box>
            <Box className={classNames(styles["que9Text"], styles["queText"])}>
              <Text className={styles["queText__en"]}>Audit procedure !</Text>
              <Text className={styles["queText__tw"]}>
                受獨立的第三方審計與監督
              </Text>
            </Box>
          </Box>

          {/* images */}
          {/* <Box className={styles["czBox"]} transform="perspective(1000px)"> */}
          <Box className={styles["czBox"]} transform="perspective(1000px)">
            <Image
              src={Cz.src}
              alt="CZ"
              className={styles["cz"]}
              ref={czActive}
              // transition="all 1s ease-in-out"
              // transitionDelay="0.05s"
              // transform="rotateZ(0.001deg)"
              transform={flag ? "rotateZ(5.81deg)" : "rotateZ(0deg)"}
            />
          </Box>
          <Image
            src={Sbf.src}
            alt="SBF"
            className={styles["sbf"]}
            ref={SbfActive}
          />
          <Box className={styles["batWrapper"]} ref={BatActive} />

          {/* BONK BUTTON */}
          {isMobile ||
            (count < 10 && (
              <Button
                w="200px"
                height="50px"
                position="absolute"
                fontSize="30px"
                color="#07839E"
                borderRadius="38.5px"
                // onMouseDown={mouseDown}
                // onMouseUp={mouseUp}
                onMouseDown={setFlag.on}
                onMouseUp={setFlag.off}
                className={styles["bonkButton"]}
                ref={BonkRef}
                zIndex="10"
                onClick={handleClick}
                isLoading={isLoading}
                _hover={{ color: "#ffffff", backgroundColor: "#07839E" }}
              >
                BONK
              </Button>
            ))}

          {/* Mint Button */}
          {isMobile ||
            (count >= 10 && (
              <Button
                as="a"
                w="200px"
                height="50px"
                position="absolute"
                fontSize="30px"
                color="#07839E"
                borderRadius="38.5px"
                className={styles["bonkButton"]}
                zIndex="10"
                isLoading={isLoading}
                onClick={async () => {
                  // 先判斷是否有連結錢包
                  if (isConnected == false) {
                    window.alert("請先連結錢包");
                  } else {
                    // 有連結錢包後才能執行 mint
                    try {
                      setIsLoading(true);
                      setStatus("freeminting...");
                      let freeMintTx = await freeMintAsync?.();
                      await freeMintTx?.wait();
                      setStatus("minted!");
                      setLink(
                        `https://goerli.etherscan.io/tx/${freeMintTx?.hash}`
                      );
                      setIsLoading(false);
                    } catch (error) {
                      setStatus("Error, please try again");
                      setIsLoading(false);
                    }
                  }
                }}
              >
                MINT
              </Button>
            ))}

          {/* Transaction Status */}
          {isMobile ||
            (count >= 10 && (
              <Text
                position="absolute"
                fontSize="24px"
                bottom="35px"
                color="#ffffff"
                left="50%"
                transform="translateX(-50%)"
              >
                {status}
              </Text>
            ))}

          {/* Transaction Link */}
          {link && (
            <Text
              position="absolute"
              fontSize="16px"
              bottom="10px"
              color="#ffffff"
              left="50%"
              transform="translateX(-50%)"
              zIndex={10}
              textDecoration="underline"
            >
              <Link href={link} target="_blank">
                View on block explorer
              </Link>
            </Text>
          )}

          {/* Mobile - instruction text */}
          {!isMobile ? (
            count < 10 && (
              <Text
                position="absolute"
                fontSize="30px"
                top="1020px"
                left="50%"
                transform="translateX(-50%)"
                color="#ffffff"
              >
                {count} / 1111
              </Text>
            )
          ) : (
            <Stack
              position="absolute"
              fontSize="20px"
              bottom={isMobile ? "120px" : "20px"}
              left="50%"
              transform="translateX(-50%)"
              color="#ffffff"
            >
              <Text align="center">Click to BONK</Text>
              <Text align="center">*Use PC to full experience</Text>
            </Stack>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Home;
