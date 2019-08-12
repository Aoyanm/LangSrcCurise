(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('乌拉特前旗', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150823","properties":{"name":"乌拉特前旗","cp":[108.652114,40.737018],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@G@C@GAWIKGMKCGEGKKGAG@GDADSVABCFEFK@GBWBODST@LADCHDNFTBFCR@BGLCFQBSCGCEDQAC@MIUNSNOLWXKJCA_ZC@CCCA@CB@@EDA@AK@@DA@@BB@@BA@A@@AC@BABAEA@DC@gGYEIAK@CBCDCH@@KdEVANC`@DeXkVGDK@[DIBKBEDYLIHEFKZGRIRUPABIFMBKDE@CBIFOHWBQBKAKGGC]@[@EAE@W@IFKFSHK@GDIDKDUFYDuFsCQCE@CDCDCPBFFFBHBH@JGPKPMN@@JRcLFFTDBD@B@DADBBDJAD@B@@ABC@ABHDBBBCXEDAF@BDHDBBRFHBPBHDBDADB@HAH@LFD@DABEF@@E@ALCDBBBAB@HDBBBBBJB@DB@D@BBL@@B@@DBDAFDDED@LCB@FBBDBDC@DDJCH@H@DDPADBPRD@BB@DJHBFDDBBBBnHB@@@HBZBZ@H@RFNDJB@J@BDD@B@DABDB@BHC@HLBL@B@BF^O@F@FAB@J@@@@A@@@A@ADAB@D@@BBFBF@ZJFAD@@DBDHBfBHDPF@@BBD@BB@B@B@JAD@@C@AB@B@BBFA@@DD@@B@BBDB@A@BFABCBAACBBB@B@BCBINCFC@AHG\\dCdALC@@B@TLB@\\LAHDBBBD@BBHH@@J@DADKbBBBADAD@D@DDFBABB@BDBDBDBDBB@B@BB@@BDBD@BDF@@B@@@DAAA@@@@B@@@@@@B@B@BEBCBABCB@BGBC@A@GMEAE@EBBAA@@BA@ABKFCDAB@AAB@BABABAB@@AB@BLJ@@JFTH@BB@JH@B@BEBG@I@IAEEGECAIGECGCAAE@A@EDCFGNCFAB@@HAB@HOB@DFBBDBDBF@DBD@@RABAHETABDBCB@D@DAD@DA@@BBB@DAB@@@FBDBD@F@F@DAB@B@FABB@D@BD@BAD@D@JAFABADCD@BCLGHCBALEB@@@BADC@AB@BBDBJABAZLHBB@AB@@@B@FFBJFP@@FJAB@AFC@@HBBBBDFDDFDDBBBD@DBDDBBJDHDHBJHRPHHDDDBPLDB`PFBD@LFB@^FJBB@BBX@BBB@LAF@JAJ@JBLDLDDDDDHFFDFB@@BBD@DDBDDBDBDBDBHBFBF@BBBBBBBBD@DCBAJBD@BBB@DBNLAFJDJ@BDFBF@FEþoRIXBXBNFDDBDHADCH@DBDCFEFCFALDFBP@FEDALDF@P@VNDACG@GbET@AAEC@AHELCZIFIBCFGF@B@B@DADCDIB@NBAAZFrHCJJBpFBLDBLBXDTADFBBfABB@AD@JBBDD@JLHHHFDBBBH@D@L@F@DAB@BBB@B@DAHADABC@EBAFAF@DA@CBABADAJ@BAFCFCDEFAB@BAH@F@F@B@L@DAB@NNDBB@LABBDGEGKCKEAGDAD@F@FB@BBDDFD@DCFBB@HBH@B@FAP@LDHBFBFBDADAXBBIEE\\EFBFADABADBFFGBEFDDH@B@BBKPDHH@@GJB@LGN@HDHBDBFDDLFJLLIPC@E@CACBE@EBADGDCBCBAFEHBDBFB@D@BK@GBCDGJDFD@FADADBHAD@FADCBEBGJEHCJABAB@F@HB@@FKCOBA@G^OKI^BCwCkNKEMFK@@IXQPMDCGOJMHAHIKOCWXURIGGDCPBNAR@Z@BANIdL@XDNILAFJJPHAJ@HHBOLCNMJWG_HSDGBCFKbOPERYNERLFA@WKCHGCQAK][HW@AFUI[eGSCGIICDIICBGIKIB@@C@@@AA@CAEA@I@C@A@C@AACACAACAEAC@A@C@AB@@A@CBCBAB@BC@@@E@GBCAAAAAAAA@CAACAAA@CAA@C@ABAA@EAICA@A@A@AACAE@A@@AA@CAA@A@CBADAB@@BB@@A@ABE@@@C@AAA@CB@@CAA@A@GCC@A@A@A@A@AAAAA@A@C@AACA@AAA@A@A@@@A@A@@C@C@A@A@EBKDI@E@E@A@A@CBAB@@C@E@CAOEKA@AA@ABKAG@I@A@GDA@@A@AA@AAA@A@CAICOCEAKAI@aAA@AAKBABIDA@aAF[OECK@WDIDQHEBKFSJ@@@A@E@GAAA@EAAAAA@@A@EBA@@BA@ABA@A@A@@ACC@AAA@@C@@@AA@@CA@@@AAAE@@ACAAAAACAA@CAA@@C@A@@@AB@@AAABAA@CAB@BA@AA@AAC@@@@@AAAA@@CBC@@@A@A@@AA@AA@ACA@@IAAAA@C@AAA@BAAAGE@A@@@ABECA@AA@@@@A@E@AB@@AB@B@BAB@BC@AB@@A@AAAA@@@AA@@AA@A@AAA@@@AAA@@@AB@@A@@@A@@B@@AA@BABA@A@@BABCBE@@@EA@@A@@@A@AACAC@@@A@AB@BA@A@A@ABAE@@@I@@@ECAAEA@@@@AA@AB@BABA@@DA@@@ABABAB@@ABA@CAE@@XAH@BMRFCw@A[F@A@@D@AABCAAHSBGBAPiBCACECKC@ADAFA@@BED@DBVGDA@ABCAAACGEB@a]PMHFACEMCIGQEOCGACCGEGQEMGG@A@@FDDDHBFCFGBCAKCWCEHGJADGHEDMB]CEA@@[EOAUHIHMHQLCBGBEBQ@IAGHOFIEEGCK@CAACGGIKH@JBN@VCHGDABA@QBYEUDEBGBK@G@EDAHEFEDGDS@QASCDMEFILEDGBG@OAQCM@UDKFIHSNABGBA@GBKAICI@sLQF@@CC@CHOFGBEBGACCCIAW@GBM@E@IDQBSBC@EAEEICCAC@EDEDAB@FALDNBHCHEDK@KAKCGACBA@AJEHGJCBEBABG@"],"encodeOffsets":[[111494,41546]]}}],"UTF8Encoding":true});}));