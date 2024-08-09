//Fri Aug 09 2024 02:32:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
活动名称：新版玩一玩兑换奖品 5.17-8.31结束
活动入口：APP-我的-更多工具-玩一玩
活动建议：定时自行修改，奖票有效期2个月
活动变量：jd_wyw_exchange // 填写兑换值，指定兑换奖品，不填默认只兑换当前价值最高京豆奖品（查看打印兑换值）
          jd_wyw_notify  // 是否推送通知，默认不推送
          jd_wyw_pinFilter // 账号pin过滤，多个pin用@分隔，默认不过滤
          jd_wyw_autotx // 是否强制查询提现接口，兑换后提现接口403可以开启

cron:1 1 1 1 *

*/

const $ = new Env("\u65B0\u7248\u73A9\u4E00\u73A9\u5151\u6362\u5956\u54C1");
var iｉl = "jsjiami.com.v7";
const IliIII = iii1II;
if (function (l1i11i, l11iI1, IliiI, lI111i, I1lIII, liIlll, I1iI1I) {
  return l1i11i = l1i11i >> 6, liIlll = "hs", I1iI1I = "hs", function (illll1, IIIIl1, liiilI, lI111l, liiii1) {
    const llIi1 = iii1II;
    lI111l = "tfi", liIlll = lI111l + liIlll, liiii1 = "up", I1iI1I += liiii1, liIlll = liiilI(liIlll), I1iI1I = liiilI(I1iI1I), liiilI = 0;
    const IIiiIl = illll1();
    while (!![] && --lI111i + IIIIl1) {
      try {
        lI111l = parseInt(llIi1(635, "er#0")) / 1 * (parseInt(llIi1(807, "fhqt")) / 2) + -parseInt(llIi1(655, "sEvZ")) / 3 + parseInt(llIi1(497, "f#HJ")) / 4 + parseInt(llIi1(509, "er#0")) / 5 * (parseInt(llIi1(556, "uIpi")) / 6) + -parseInt(llIi1(813, "er#0")) / 7 + parseInt(llIi1(619, "T]Xn")) / 8 + -parseInt(llIi1(652, "u3$f")) / 9;
      } catch (l1ilIl) {
        lI111l = liiilI;
      } finally {
        liiii1 = IIiiIl[liIlll]();
        if (l1i11i <= lI111i) liiilI ? I1lIII ? lI111l = liiii1 : I1lIII = liiii1 : liiilI = liiii1;else {
          if (liiilI == I1lIII["replace"](/[RVNWYyGIqPldeXxgTrn=]/g, "")) {
            if (lI111l === IIIIl1) {
              IIiiIl["un" + liIlll](liiii1);
              break;
            }
            IIiiIl[I1iI1I](liiii1);
          }
        }
      }
    }
  }(IliiI, l11iI1, function (IIiiIi, l1ilIi, l11iIi, ll11li, iliIlI, lI111I, IlilI) {
    return l1ilIi = "split", IIiiIi = arguments[0], IIiiIi = IIiiIi[l1ilIi](""), l11iIi = `\x72\x65\x76\x65\x72\x73\x65`, IIiiIi = IIiiIi[l11iIi]("v"), ll11li = `\x6a\x6f\x69\x6e`, (1520194, IIiiIi[ll11li](""));
  });
}(12544, 260928, Iii11l, 198), Iii11l) {}
const jdCookie = require(IliIII(845, "hXs0")),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require(IliIII(504, "sEvZ"));
let taskThreads = process[IliIII(885, "GlJW")][IliIII(524, "T]Xn")] || "1";
const runInterval = process["env"][IliIII(547, "fhqt")] || IliIII(513, "6O1$"),
  isNotify = (process[IliIII(888, "er#0")][IliIII(892, "6xs)")] || process[IliIII(784, "uD%l")][IliIII(627, "6xs)")]) === IliIII(771, "hXs0"),
  pinFilter = (process["env"][IliIII(671, "(X0u")] || "")[IliIII(682, "O0d8")]("@"),
  exchange = process[IliIII(756, "uNf8")][IliIII(546, "0qS!")] || "",
  autotx = process[IliIII(604, "mc4x")]["jd_wyw_autotx"] === "true",
  linkId = IliIII(579, "k^eI");
function iii1II(_0x4e2504, _0x21f677) {
  const _0x2030c1 = Iii11l();
  return iii1II = function (_0x5a545f, _0x126e45) {
    _0x5a545f = _0x5a545f - 475;
    let _0x32deed = _0x2030c1[_0x5a545f];
    if (iii1II["tTtNGl"] === undefined) {
      var _0x5c78e1 = function (_0x54c5b2) {
        const _0x1be4b3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x3abd16 = "",
          _0x2a6df7 = "";
        for (let _0x499ae0 = 0, _0x3fc055, _0x194776, _0x585a20 = 0; _0x194776 = _0x54c5b2["charAt"](_0x585a20++); ~_0x194776 && (_0x3fc055 = _0x499ae0 % 4 ? _0x3fc055 * 64 + _0x194776 : _0x194776, _0x499ae0++ % 4) ? _0x3abd16 += String["fromCharCode"](255 & _0x3fc055 >> (-2 * _0x499ae0 & 6)) : 0) {
          _0x194776 = _0x1be4b3["indexOf"](_0x194776);
        }
        for (let _0x1e46af = 0, _0x3113f9 = _0x3abd16["length"]; _0x1e46af < _0x3113f9; _0x1e46af++) {
          _0x2a6df7 += "%" + ("00" + _0x3abd16["charCodeAt"](_0x1e46af)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x2a6df7);
      };
      const _0xe95679 = function (_0x143cc4, _0x57b8b8) {
        let _0x2a64f5 = [],
          _0x3a0ebb = 0,
          _0x106252,
          _0x392092 = "";
        _0x143cc4 = _0x5c78e1(_0x143cc4);
        let _0x41c283;
        for (_0x41c283 = 0; _0x41c283 < 256; _0x41c283++) {
          _0x2a64f5[_0x41c283] = _0x41c283;
        }
        for (_0x41c283 = 0; _0x41c283 < 256; _0x41c283++) {
          _0x3a0ebb = (_0x3a0ebb + _0x2a64f5[_0x41c283] + _0x57b8b8["charCodeAt"](_0x41c283 % _0x57b8b8["length"])) % 256, _0x106252 = _0x2a64f5[_0x41c283], _0x2a64f5[_0x41c283] = _0x2a64f5[_0x3a0ebb], _0x2a64f5[_0x3a0ebb] = _0x106252;
        }
        _0x41c283 = 0, _0x3a0ebb = 0;
        for (let _0x36a8ce = 0; _0x36a8ce < _0x143cc4["length"]; _0x36a8ce++) {
          _0x41c283 = (_0x41c283 + 1) % 256, _0x3a0ebb = (_0x3a0ebb + _0x2a64f5[_0x41c283]) % 256, _0x106252 = _0x2a64f5[_0x41c283], _0x2a64f5[_0x41c283] = _0x2a64f5[_0x3a0ebb], _0x2a64f5[_0x3a0ebb] = _0x106252, _0x392092 += String["fromCharCode"](_0x143cc4["charCodeAt"](_0x36a8ce) ^ _0x2a64f5[(_0x2a64f5[_0x41c283] + _0x2a64f5[_0x3a0ebb]) % 256]);
        }
        return _0x392092;
      };
      iii1II["EjUsQb"] = _0xe95679, _0x4e2504 = arguments, iii1II["tTtNGl"] = !![];
    }
    const _0x4cf711 = _0x2030c1[0],
      _0x57fdc6 = _0x5a545f + _0x4cf711,
      _0x5e878b = _0x4e2504[_0x57fdc6];
    return !_0x5e878b ? (iii1II["PxXbHU"] === undefined && (iii1II["PxXbHU"] = !![]), _0x32deed = iii1II["EjUsQb"](_0x32deed, _0x126e45), _0x4e2504[_0x57fdc6] = _0x32deed) : _0x32deed = _0x5e878b, _0x32deed;
  }, iii1II(_0x4e2504, _0x21f677);
}
function Iii11l() {
  const llliIl = function () {
    return [...[iｉl, "qPjTesVWXjeridaYminrP.lqcxoImNx.vGY7qyRg==", "aMGD", "AhlcLSkWW6e", "rqzhqCkiWPxcUuXOew0", "WRWJW5bUAq", "uSodhtnUmmoiwvFdRmkbcCozW4BdNCoVW5LgoW", "WRuWsfxdTa", "sCkWWPW", "W6NdPupdKmkn", "W4NcGaK/W6SBEWPMW4tdOwTws8ogeCkYA8oHWQu2zSkmW7ujW6SFW5NcK8o8WOuktGVcKwiLWOmXWRddGSoFWP4SWP1lemkIpgpcPetcHmkrCs7cVL0HpvL3WRVcKgnrW5KMttldR28", "W4xcLqKU", "sSozrI0W", "W5igWPKbhGOUl8oMW5zD", "W4VcKmog", "rNjFlmklWQm", "W6G7W4bJqq", "ExlcKCk6", "5B2j5yIR5PYw", "qNdcUhW", "WR/cNSkytq", "FI3dMq", "W4dcP8o2x38", "Cmk+WQ7cJMlcNXVdSSk1dxiUWRxdRsudWPFdGSkFW7LeWPddNCoEW5bSW7FcICk8B393vwO", "WQ3cMmkhW4m", "4PUdWPhOHj/LR5FKUy/OVRpOOkRPLkxPMQtMLPxPL4xORyZNVi7PLklORiK", "WR9xD1zUw8oNk8kfWRJcGuu", "WPbDWRLbsG0", "s8ocESo0za", "m0VdOGn2WOBcHu13W6fa", "WRWoAq", "W43cMXO", "W7/cPowhPoAnV+waIYS", "W6KCW7H/Fq", "WRldPSk0qgZdVa", "W7nPvf3dRG", "WP0pEfldTa", "c2Km", "umkvW4S", "i0rbqZBdQW", "WR3dOCkRuxVdUG", "WPzRWP9/wG", "WQeWW494tq", "EZBdM8kmDG", "WPj/WOhdKCk2", "DGL4", "FtRdIexcKSkm", "W5WLWRpdMri", "W4DXWQCfesa5BwKBW7n0WOG", "W4/cJmos", "W4HrzuVdRG", "5O+c54+Y5AAp6lEep8kU", "tdPNz8kn", "z17dKNxcNs0kxwlcI8ozW7jj", "W4JcVXizW60", "W4ruyfxdMCkMDsfD", "hqqYWPOwWPVcOW", "W6NdV8kgDa", "5P256k6A5yE/5O2n6AgX5Aww6lARwuK", "WPddJe98WQGxyNz1W7pdNW9A", "tI1PWRT/", "W7qYW77cGCkR", "aW4L", "WRBdSSkXkSoyW6C", "WPvEF0W", "WRTVywTM", "WPddMSkk", "W6hdSCkv", "awKzmSktWQe3", "zJxdHu3cImkfFM4", "5O6/54+r5AwZ6lEttCoy", "W4OIWQFdLarF", "me/dOIC", "WPXAzMRcTWLcW61wW4ddTCorWRqf", "WRvxWRyLAq", "sWZdM8kqBG", "5ywJ5O+D5OI75yUHtMy", "WRBdTSkbD00", "WQtdS8k3pmot", "W7azWRhcHSor", "W7esW4xcI8kqz8o8", "WQddVSk3kW", "AvVcMLJdKq", "4P2QmEAFPUIdOoAVT+EGKowKTEEtUba", "rgnZkCkoWRK", "hSkF6l+Z5P23", "4P2UWORMJ5VNJlpLPjBOTzdVVjFKUkJKUQhNRiNMJ4BNJjVOVBdMNjhLRAlMIBu", "WRyAuwhdIa", "tGXu", "W4ddU13dGW", "vCkUW4xcLwu", "iY/cJSk7W5ddKCkkbSoZzq", "WRddRSkSvq", "WPHzBum", "lfHf", "5OIF5yUe5O22546r", "W5bhAfVdTmkFDcu", "EdVdJtdcKq", "DSkRWRFcMW", "WPuMW7ft", "WPzYWOBdI8k6yGVcLsBdSu8JigJdR8oAka", "W70vW4fAAHm", "WOj8WOBdLmk6CG", "mSocW68", "W7ayW5e", "W4BdRfRdJSkBhYDbaSodW4/cH8oJ", "qKJcPu/dVW", "DmkLWR0", "W6hcVSknxCk/WQi", "t8kiWPpcULy", "tSofBa", "W78uW6H7uW", "scZdQZxcTCkkW4NcMmkYW75GmSo8gCkwwCkZmmoV", "fmoPW79Cnq", "BhpcL8k2W7tdKmkicmo0Dar8", "jmo7W7b1oG", "W5ScWOaH", "FCkCcCkWlcvHsSoGWPBcOSkX", "W4FcH8owDvz/WO12lHldHKuy", "m8oiW7TldNi1", "5O2Y542p5AAe6ls4dte", "W40iW6CEc1FdVJBdHJ7cSSourW", "W4SkuWON", "sW1ayCkiWPm", "WPZcSSkaD8kw", "W4pcJ8o2Fer5WR16crNdRuuChq", "v8kMWOZdNSo8", "c8ofWOe9DvLjW75re8otW5WnfCkmWQ5HrdnxWRfDj8kD", "5P+L5BM+5AY6", "zq7dV8kQyW", "5ysY5O+t5AEe6lwOpem", "W5anWPS", "W4XnDeBdGW", "WOyOW6Dxtgvlx34/", "W4tcMGS", "tsPnWPDl", "yJVdLmkTDW", "W40AWR7cOSon", "zt/dUvBcHmkwrhmrW4H7W57dLW", "BSkDWRGi", "EmoouqGd", "wahdKetcQG", "WQmkW4b6CG", "44c/5O6z56AL44gO6kYJ5yA26iYB5yY9WOxdKh8PW4mz", "w8orsbibiSo1W4i", "qg/cNSknW7W", "rGjhzq", "W7VcJSkRyCkl", "W7ebW7XxvG", "W4yclXtdPvSuWRKoWQS", "WR4fA0ddJq7cM8kZWOVdTIu", "FGpdGwdcNG", "FSkXWOK", "yx7cQM/dJq", "vJfFr8olW7nPEGFcJg9XCW", "nSoYWQabvq", "t8k+WPJcS8kTveldMeWGW7ylWPWSWQK", "5yEh5O695OIR5yUpqmol", "WRa+W6ruqG", "CLnaW4KsW4OvW7m", "ufVLHRxMJR3LGQ/cHa", "WPVcJaSt", "W5SgWOGGpH0SmSoDW4b5z2FcPCorWRRdNCoPFCo6WOW", "W6xcQ1OKd8ky", "WPHHWR50vq", "WOLAzuJcQGj9W71dW7m"], ...function () {
      return [...["WRDSWOmfCW", "4P+5goAmH+EoLUAiRUwlUG", "vx3cPx7dSq", "wNzbpa", "W5dcHCkcw8kM", "WQhdMYtdLSo8WR4", "uw9pmCkgWRLdWR1eCKtcOCkS", "WOL2WONdLSk2zXK", "W43cKrmOW6Xj", "W5iNBIS", "W4aCvbiJ", "6lAW5yYO5PEB5Psy", "WOJcJbyg", "vmk2WOZcJCk6wxpdM2v2", "WPn2WP/dK8kHCt7cGGNdSq", "5Bso6k6g57656lEv6l+56l616kkg5BY85yUZ6lw25yYg", "CCkKWRNcKMtdGvhcRG", "mSoLWP4+zW", "WOVcUSkRW5VcHq", "d+E6JowoKXS", "WQtdHaldSmon", "W5veuMBdLW", "W6qbWO4", "kComW6zbbMiXW5qkWQ3dQCk3jH3cUCk2W4WvWOhdKmkRaG", "W5FcPmket8kA", "aCoMWOWhza", "WQRdS8ktnW", "W4dcHW4MW79poub4W4ldHYe", "uSo+bt18", "WQtdKcNdNCo9WRlcMwG", "W74GW61Tta", "wmkBW5JcOW", "EmkoWQFdVmoT", "5ys25O2K5As95zk277+OW6RMJ43PMy3KVz7MGidLIlGBna", "WRVdSmk5", "WRxdVmkRxw7dOa", "W74bW7DSqa", "WRRdNYpdHq", "cSoEWOy", "W45iCKRdKSkc", "5OYh54YV5AEV6lw6WOZcSW", "rffrnCkE", "WOhdTCklxx4", "WQJdHINdMCoPWRJcM34mWRZcJ8o0xa", "W58HWQirdq", "WOXkWR5CwYlcUaddIYdcUmoN", "WOxcSSkNW7JcJG", "WR4fA0NdNGJcKCkYWRldHdjxWRnLWR7dKHRcTmky", "6yk5552X5O6r6ykNW4brgW", "WOP0WPy0Fq", "W40NEW", "mXBcGsxdIxfzyuNcHSo1W5DK", "WOfgWQCfr8o3WRdcK23dOmkry8oWWO5mk8o1WOpcOmkTAa", "W5NdS2hdT8kV", "WO7cPaqdW6C", "WPOMW7i", "qWNdKmk0Ba", "tSkFW5ZcP0Wx", "g2FcQa", "WOddVCkMacC", "sYJdQXG", "W5dcMSocFev1WR5Qdrq", "Ad7dKM3cNmkvFM4kW71IW4JdUcbHsCofr8om", "E8kkdSkrFJH4", "fmoqWPW5uGOlWRq", "W5mZWQ3dGbW", "whHl", "DqLvqCkB", "W4GMFZmZW43cOCox", "WPVdQCk9q0m", "W6S7WR3cLmo3", "i3xcISorpmk/WRPWW7ubWQ/dJmkV", "wmoIyCoiBW", "W4NcGaK/WQioE0rMW5/cOcGvd8oiw8o/z8oJW6D4E8ke", "y2xcGCk7W4hdM8kiaSoSzq53wmktE2rSumkxjCoj", "rCoEqGO", "kSowsSkbjIXfqmol", "FgNcQ8kiW5e", "EGhdOZjTWPJcMrbOW7DfxSk1cHBcOa", "eCouWOiSDaCYWQHabG", "oSomW7Xz", "8y2bICotW7K", "5ywn5O6n57Uy5y+C5OMB5yUu", "WPddHeH9WQ1GbunvW5ZdNG", "CNflc8kI", "5PYV5BQc5A6u", "WONdI8kTlXG", "WQ1hWOBdIa", "5yw25O695OU75yM8W6uD", "WOCzW7D/Ba", "b8ovW4bqgq", "5PAh5BQv5AYZ", "zspdL8kvuCoNW6fg", "F8kVWRtcQ1a", "qsZdUH3cHSkBW4hcHmkWW5PtlCoff8knt8ktmCoLpCoR", "BqDXWOfvWO1AWQ0MW6eYW7ZdH8kQf8oDW7e", "W7dcHSk1smk7", "WR1T5yAK5OYc5ycyWQi", "thxcK2RdRqLUWQfeW5xcRSkZyCoicq", "caq2WRmfWORcQx5cmGu", "xmoigHP9ma", "W5KgWOmJgba", "aWqSWPedWPa", "rSovgGDU", "umk+WOlcLW", "WOrxWOeb", "5O+Y54+t5Asc6lsHW4ddHW", "rgvfi8kcWPbwWRDIywlcTW", "qxtcUfxcOq1f", "aCkixG", "WQxcLSku", "yujlhCkb", "W4JcMH4JW61fmvy", "cqG6", "jxBdSqDN", "5y+k6ysr54My5Oki57M/5P+2taawWQD3lKOOWP7dIa", "W4FNJ4FPHAFcPq", "WQtcTmkhACkN", "WOu8W7zvrgv8", "Cmk/fSkWdW", "W6FdUSkTyLFcJCoOWPRdIwyao8kJxYu", "paRcVtRdKwHHBxtcKCo/W5D3W45g", "l1zk", "wu/cNCkhW6a", "EMhcJCkRW4FdL8kica", "W7hcRhG9na", "WRJdOmk/", "5yE25O2e57QJ5yYQ5OQW5yMP", "vCoMsSoiqq", "tfpcR0NdJq", "cSodWPZcMKaeb8kcWRS", "wapdUSkkCG", "i0DGtZldQJpcHhzfymknWP7dRMpdJCkIFvRcJSoA", "urDsCmkpWPq", "W4hcJCoqFen0", "rCotgHC", "WQ1iWP0xnvxcUa4GW4dcT1eI", "W6RdU8kgufZcImoyWO3dVhyp", "WOBdMmkLoa8", "WQRdMZ7dTmo6WQtcK2KsWQZcHW", "ywxcISk4W6FdLG", "WPZcJbagW4Lyo8kMWPJcHW", "57If5AYv5OQt5PYo5y++", "WPbDD0v/xq", "5P+r6k+15yw95OY76Aks5AEM6lsbW6i3", "WRNcNSkw", "BI1mWPnj", "W7/dV8kCCuhcLW", "WPrzWQr1sGRcQqq", "WPDAFe7cRa4", "W44TW79hFG", "t8ktW4VcReGheCkAWPBdLW", "c2mfemkgWQO", "vXr7WRqCWOZcRgm2CY7dVvhdJfRdOrFdGmkXW4ygWR0", "W6i+WQdcHSoG", "WOddPSkDlSoo", "fwmyaSkEWRy", "jaVcKtJdHgS", "WOJcUHubW4m", "W77cQ08GcCorWO/cLvPJW4WDWOmtW6OgWOWLx8o4WPJdKJNdSGSReuHkW57dKmozBmo9", "5l6V5O+r5Aw956sw5Pse6yAj5yEb5O+t5y6X5ysH5O6955Ir5P+U6AIp5lMc6lgu5Asm5zkV", "4P2QqEAoKUEnHUAjP+wjPW", "5O+S542k5AAD6lENf0m", "WO5nWRLJuae", "W7axW4K", "4P24n+ApVoEpQEwNLUI3SU+8VG"], ...function () {
        return ["kSoYWOqzra", "FmkRWQ7cNW", "5AA256wEWQG7", "W6BcRviQh8k/W5NdIL4", "cSoLWPWAtG", "W5hcK8oCFLi", "WPPrDvzUrW", "qY/dMmkoAa", "zspdKmkyBmo5W61nW6SiWRJdRmkkdSoBw8kjiXu/W53cLG", "WQ1vWRfjuW", "5BsM6kYX57626lEh6l+o6l2E6kkd5BYG5yIP6lw45y65", "wbFdTe7cIG", "o8odW74", "m0VdOGTHWOFcMv5DW7C", "6lEq5y6+5Pw15Pw+", "mfWDeSkL", "W5FcG8kGD8kH", "WQFdVmkeoGPwh8ko", "5yYT5OYp546l", "WQFcUSkfqmko", "WP1lAKTSwW", "WPpdIEwgTUAmTowbGWG", "vqjDFCktWPdcT1b6b3ldJKddR2CYnG", "A8oiFHeo", "x8ogEqyM", "WQSfAgtdJrJcOmk4WRBdOa", "oehdSq", "fYtdTcZcOu0hWPLAW7ZcMCkdvG", "5P6X6k+m5yEh5OYK6AgX5AEf6lEpbrO", "as4ZWOmv", "WPiOW6fx", "4P6zW5hMJkhNJPpLP6xOTlFVVAW", "WPTuWPPCtq", "WOJcGGWc", "zhxcGmkQW7q", "zt/dUvBcHmkwrfmrW4H7W57dLW", "y8kqWRufuIHTWODOW7u", "W7GwW4lcMq", "EMhcISkMW7RdICkea8ofDYrSx8kCygbs", "5PYv5BM85AYI", "5P2l5BQK5A2Q", "qd/dRtpcTW", "W40NCq0t", "WPdcKrWzW59Sgq", "EMhcJCkR", "W4iKwGSr", "W5hcMSkYqSkK", "W7yOW6DArq", "emofWOCKAaqpWRDj", "zspdKmkyBmo5W61nW6SAWQNdU8kkc8ohxCkB", "yw/cGW", "n2uJo8kJ", "BGJdUYRcUG", "5y2l6yse5B+J5zc354MN5OohrCk6W4FdOmkLDLldPsbD", "xfbY", "AmkRWQJcN3ZdLNdcVmkGha", "B8kAgCk6lJH/", "W70AW5NcJCkFDa", "xsZdQbJcPSkAW7JcKSk2W5O", "5OUe5yIq5OYi546e", "W6pcQCoUACkaWQznW4RcGuZdIKdcUa", "WQNdT8kteW1afCkpAs7dIq", "WOJcSmkIW6hcSW", "zr7cPx41W4BdNfjZW4bEx8kW", "u2xcQg7dUa", "W7lcLSomAw4", "BdtdGKq", "wsRdQ0lcMG", "As/dUcVcKq", "jfVdPs4", "WOXEFfdcSrfiW6PSW7pdRmoEWQKbW4dcIH0", "hbKPWQm8", "W47cKmos", "AZRdKKa", "WP5XWRfcFq", "WO3cNtacW4DeeSk3WONcIhxdTSowdSosDCkNhLKiW4e", "u8omwbCtkmo9W5qWbmkwW7e", "WQ7cVa0XhW", "WQvay1DG", "Emk6WRhdVSovW54UtuldTaX6g2hdHSkh", "WP/cMaeeW4fyda", "a2NOVyFMNBa", "mKu+o8kH", "W4OOWQ4", "44kD5O2o56Ei44ce6k+z5yAY6iYa5yYPW7jQbZhcPf0", "q8k+WP/cGG", "W77dPSkzqgu", "W4bdDwRdKSkeDJjPySkm", "W4zwu0RdG8kzDdbbF8kyC1PMWRa/zu/cLCk0ca", "WPDqDq", "WQFdV8k0xx0", "arRcKZ7dJW", "r2lcV3tdSXa", "W6hdHwJdVmkp", "5AE356sG5PwS6yAq5lMl6lsA77+i5Pwe5RoW5yAK5O2W", "iSoKWQCKqa", "WOi7W7LGzG", "W7lcVK8X", "yUIVGoAXSowKM+I1TmkL4P+cW5tML7pLK6BLUOFMLPJMJRq", "rs5HBmky", "5yA/5A26WOpdI8kf55Ue6kYb5y+0", "yc99rSkI", "aw8ha8kxWRa", "WPbxWRa", "W4nhDu4", "xLH7W48", "z17dL3/cNv5VyLNcJ8ok", "umopEmo2sWe", "W48TEtSuW4ZcQColu8kquvORW6ldTComW5tcQCk2WRiH", "agiOmmkX", "zCk/WOFdVCo4W4aCwa", "5OUz5yMM5OYJ54Ys", "W5lcVCk3AmkP", "wcJdTG0", "WO7OHjxLIj3LHyZMJzxNURpLJ68", "WQhdKs0", "u3jyfCkiWRbnWRzezuRcP8k8WOW", "W7qZWOOlkq", "ubzDqCkuWOm", "aN4caW", "4P2EyUAnRUEnKEwKToI2Q+++LG", "WP3dJmkPyeS", "ag9vEZK", "WOxdJdNdN8ok", "aSoCWPO4AbC", "WODtWOePsSo0WRtcJw3dJCknAmoaWPLdka", "5O+75A6I5yAg5O2e5yccx8oQ", "b8oqWOeS", "WR3dIZNdMq", "E8kWWP3dRmoEW50", "FtpdStFcSa", "s8k1dmk8ha", "W6BdU8klzG", "W6KnWP3cMSoxyG0iW7zQzmo1WQ7dPSkZW4VdPvWS", "5O+L54Yw5Awy6lwAnwq", "jmokW5bPoG", "W5GqWOO", "Fa9N", "WQhcJCkhW5lcMhRcJmkoW6KVvcdcRmk6pMRcVLn/xW7dT2y1", "zJxdLutcJ8kv", "W4GMBZO0W50", "WP7cIbugW5zpmCkMWOhcGW", "BqD2WOW", "W6rJuepdOq", "5ys+5OYd5OMs5yMPtCoy", "WPBKUjlOSiZdRa", "WQldVCka", "ESkgaG", "s8kWWOW", "4P6zW5hOH6VMNi/OVitOOz7PGlhLI4lKUkdPL5tOR4ddMa", "v8opeZXGimoi", "WPvlvu1Sxmo9", "bmouWOefmXas", "rcpdV1xcVW", "W5aZW7P1yq", "i3VOVB7MNkG", "WPPryq", "W43dSvZdGSkOfc1lj8ofW6pcMSoPW6y+W7JcHdqSsSkA", "W7xcOSkpBmk0WRq", "n8ocW7S", "d8oEWPi", "rSkVWPVcJ8k2xK3dMgqSW6XTWPG5WQNcReBcRSkYW5FcTmkjgfvzxgddG2ldOIzUoa", "BmoEirD5", "WPGSW7bsC3nIuxW7W6frWOzph8orW7G8EujZ"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return llliIl;
  };
  return Iii11l();
}
;
let hasGetBasicInfo = ![],
  business = IliIII(809, "Fea]"),
  cookiesArr = Object[IliIII(724, "0qS!")](jdCookie)["map"](i1iIiI => jdCookie[i1iIiI])[IliIII(694, "uNf8")](IlllI1 => IlllI1);
!cookiesArr[0] && ($[IliIII(803, "^lqH")]($[IliIII(870, "GlJW")], IliIII(897, "YP[3")), process["exit"](1));
const rewardType_table = {
    1: IliIII(939, "sEvZ"),
    2: "[\u4F18\u60E0\u5238]",
    3: IliIII(737, "ex9w"),
    4: IliIII(542, "6O1$")
  },
  rewardType_map = {
    "\u7EA2\u5305": 1,
    "\u4F18\u60E0\u5238": 2,
    "\u4EAC\u8C46": 3,
    "\u73B0\u91D1": 4
  };
!(async () => {
  const II1l = IliIII;
  notify[II1l(856, "Yo7y")]({
    "title": $["name"]
  }), await Main(), isNotify && notify["getMessage"]() && (await notify[II1l(561, "F!CM")]());
})()["catch"](I1il11 => $["logErr"](I1il11))["finally"](() => $[IliIII(625, "[CxF")]());
async function Main() {
  const liiiiI = IliIII,
    lI1l11 = {
      "jBcTY": function (II11l, II11i) {
        return II11l >= II11i;
      },
      "LKTZe": liiiiI(779, "4QFc"),
      "cMVPj": function (iI1Iii, liI1ii) {
        return iI1Iii(liI1ii);
      },
      "BLNBX": function (lIIiIl, iI1Iil) {
        return lIIiIl > iI1Iil;
      },
      "qEvJs": function (il1iI, i1iIii) {
        return il1iI !== i1iIii;
      },
      "KxYtB": function (i1iIil, liI1il) {
        return i1iIil !== liI1il;
      },
      "ULXae": liiiiI(962, "O0d8"),
      "bSCDh": liiiiI(766, "ci(W"),
      "APgOE": function (llIlIi, llIlIl) {
        return llIlIi + llIlIl;
      },
      "icuPJ": function (II11I, il1i1) {
        return II11I > il1i1;
      },
      "DHCop": "vfuye",
      "jUvuA": function (lIIiIi, liI1iI) {
        return lIIiIi !== liI1iI;
      },
      "EtWQl": "sNuYL"
    };
  try {
    try {
      const i1iIl1 = lI1l11[liiiiI(522, "tDtB")](parseInt, taskThreads);
      if (lI1l11[liiiiI(693, "h46D")](i1iIl1, 0) && i1iIl1 !== 1) {
        if (lI1l11[liiiiI(543, "Qa!8")]("IiKVV", liiiiI(498, "uea*"))) taskThreads = i1iIl1;else try {
          const llIlII = lI1Iii(i1li);
          lI1l11[liiiiI(475, "3ZN[")](llIlII, 0) && (IliI11[liiiiI(490, "4QFc")] = llIlII);
        } catch {
          i1l1lI[liiiiI(664, "^lqH")](lI1l11[liiiiI(966, "(ttG")]);
        }
      }
    } catch {
      if (lI1l11[liiiiI(745, "6xs)")](lI1l11["ULXae"], lI1l11["bSCDh"])) taskThreads = 1;else {
        let {
          rewardType: lIIiII,
          rewardName: i1iIlI
        } = IilIiI[liiiiI(629, "6O1$")][liiiiI(699, "uea*")];
        i1i1I1 -= IlII1;
        let li111 = IiI11[lIIiII] || "";
        lli[liiiiI(785, "er#0")](liIlI + "\u5151\u6362\u6210\u529F: " + li111 + i1iIlI + liiiiI(839, "ci(W") + lll + "\u5956\u7968"), llli1[liiiiI(526, "F!CM")](liiiiI(736, "k^eI") + li111 + i1iIlI);
      }
    }
    taskThreads = Math["min"](taskThreads, 3), $["waitTime"] = null;
    if (runInterval) try {
      const liI1lI = parseInt(runInterval);
      lI1l11[liiiiI(555, "T]Xn")](liI1lI, 0) && ($[liiiiI(850, "Fea]")] = liI1lI);
    } catch {
      console[liiiiI(476, "FRfv")](lI1l11[liiiiI(746, "^K(3")]);
    }
    console[liiiiI(571, "Qa!8")](liiiiI(903, "qvJN") + $[liiiiI(852, "xZCM")] + liiiiI(645, "tDtB")), console[liiiiI(954, "u3$f")]("\u6D3B\u52A8\u5165\u53E3: APP-\u6211\u7684-\u66F4\u591A\u5DE5\u5177-\u73A9\u4E00\u73A9"), console[liiiiI(552, "O0d8")]("\u5151\u6362\u6A21\u5F0F: [" + (exchange ? lI1l11[liiiiI(709, "GlJW")](liiiiI(718, "KbZc"), exchange) : liiiiI(586, "ci(W")) + "]"), console["log"](liiiiI(968, "6H0p") + (isNotify ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[liiiiI(675, "Y!ow")]("\u8D26\u53F7\u8FC7\u6EE4: [" + pinFilter[liiiiI(774, "Qa!8")](", ") + "]"), console["log"](liiiiI(628, "mc4x") + $[liiiiI(818, "qvJN")] + liiiiI(541, "(X0u")), console[liiiiI(481, "oa5g")](""), $[liiiiI(755, "oa5g")] = [], await common["concTask"](taskThreads, cookiesArr, taskFnc), $[liiiiI(910, "C5Ph")] = ![], $[liiiiI(710, "h46D")] = ![];
    if (lI1l11["icuPJ"]($[liiiiI(916, "GlJW")][liiiiI(781, "KbZc")], 0)) {
      if (lI1l11[liiiiI(608, "tDtB")] !== liiiiI(890, "f#HJ")) cookiesArr = cookiesArr[liiiiI(750, "tDtB")]((lIIiI1, ll1I1) => !$[liiiiI(749, "6H0p")][liiiiI(898, "ci(W")](ll1I1 + 1)), $["needRemoveCookieIndex"] = [];else {
        if (lI1liI[liiiiI(672, "[CxF")] === !![]) iIII1i = iil1i1[liiiiI(778, "(ttG")];else {
          let iI1Ii1 = il1i11["getErrorMsg"](IlIll1[liiiiI(773, "T]Xn")]);
          IlIII[liiiiI(954, "u3$f")](ilil1l + liiiiI(588, "uIpi") + iI1Ii1);
        }
      }
    }
    const iI1Il1 = notify[liiiiI(605, "sEvZ")]();
    iI1Il1 && console[liiiiI(664, "^lqH")]("\n\uD83D\uDCE3 \u8FD0\u884C\u7ED3\u679C\n" + iI1Il1[liiiiI(810, "k^eI")](/：/g, " \u279C "));
  } catch (Ii1ill) {
    if (lI1l11["jUvuA"](lI1l11[liiiiI(891, "GF#]")], liiiiI(814, "lpZo"))) console["log"](liiiiI(741, "Qa!8") + Ii1ill);else {
      iIIl11[liiiiI(729, "lpZo")](liiiiI(602, "O0d8")), l1l1I1[liiiiI(861, "xZCM")](I1iIll["getInlineContent"]()), I1lliI["needRemoveCookieIndex"]["push"](llIllI);
      return;
    }
  }
}
async function taskFnc(iI1IiI, IIlI1) {
  const II1i = IliIII,
    i1iIli = {
      "YWDcJ": II1i(691, "h46D"),
      "QTksa": function (Ii1I1i, llIIlI) {
        return Ii1I1i <= llIIlI;
      },
      "UCULS": function (Ii1I1l, IIlIl) {
        return Ii1I1l - IIlIl;
      },
      "WZveW": function (ili11l, Iiilll) {
        return ili11l + Iiilll;
      },
      "YNeqk": function (Iiilli, IIlIi) {
        return Iiilli + IIlIi;
      },
      "jPIuA": function (ili11i, iiIi1l) {
        return ili11i === iiIi1l;
      },
      "PcHLQ": function (li11I, lliiII) {
        return li11I !== lliiII;
      },
      "Yxzuk": II1i(688, "oa5g"),
      "CNaCw": "nYTcw",
      "mTgwK": function (iiIi1i, liI1ll) {
        return iiIi1i(liI1ll);
      },
      "WLRow": "superRedBagList",
      "izHAE": II1i(833, "GF#]"),
      "PiytY": function (ll1II, IllIii) {
        return ll1II < IllIii;
      },
      "iudug": "dXzWx",
      "zgXQU": "poolBaseId",
      "clFTW": "prizeBaseId",
      "DogWK": "apCashWithDraw",
      "bWyJb": "AURiF",
      "VqMcg": II1i(646, "k^eI"),
      "utdsl": function (liI1li, IllIil) {
        return liI1li === IllIil;
      },
      "lPliD": II1i(894, "ci(W"),
      "MozRo": II1i(568, "O0d8"),
      "tKSku": function (ill1Ii, llIIl1) {
        return ill1Ii === llIIl1;
      },
      "tCnLE": II1i(697, "k^eI"),
      "KFQFT": "\u5DF2\u5B58\u5728\u72B6\u6001",
      "dYiRk": function (ill1Il, i1lll1, Ii1I1I) {
        return ill1Il(i1lll1, Ii1I1I);
      },
      "DwGDX": function (l1i1Ii, l1iI1) {
        return l1i1Ii * l1iI1;
      },
      "bIfdC": function (lliiI1, IiiI1) {
        return lliiI1 !== IiiI1;
      },
      "evChn": II1i(564, "u2z6"),
      "JDwdZ": function (lilII, IIIiI) {
        return lilII === IIIiI;
      },
      "qPbIM": II1i(516, "mc4x"),
      "bugBa": function (iii1i1, IllIll) {
        return iii1i1 !== IllIll;
      },
      "wLAKf": II1i(621, "k^eI"),
      "ZQBbJ": II1i(641, "f#HJ"),
      "aTHMe": function (i1lllI, llIIi1) {
        return i1lllI == llIIi1;
      },
      "WyCqx": II1i(902, "^K(3"),
      "UaCEM": II1i(886, "Fea]"),
      "ozNdw": II1i(735, "Fea]"),
      "QqTNW": function (iI1IlI, l1i1Il) {
        return iI1IlI === l1i1Il;
      },
      "Wtqsg": II1i(804, "Fea]"),
      "JADkw": II1i(787, "^K(3"),
      "bXCBH": function (ill1I1, l1i1II) {
        return ill1I1 === l1i1II;
      },
      "WBIDG": function (ili111, Ii1I11) {
        return ili111 === Ii1I11;
      },
      "jSHYd": II1i(510, "tez&"),
      "ZyVsU": function (IllIli, ii1Ii) {
        return IllIli !== ii1Ii;
      },
      "zbzjb": II1i(496, "GF#]"),
      "GofrY": function (ii1Il, l1iII) {
        return ii1Il(l1iII);
      },
      "UUgDf": function (iI1Ill, lilI1) {
        return iI1Ill !== lilI1;
      },
      "BQQZu": II1i(584, "[CxF"),
      "ESIAo": II1i(600, "f#HJ"),
      "Qmfom": II1i(585, "%A)b"),
      "ICqTB": II1i(893, "mc4x"),
      "iTiWH": "android",
      "BCXyn": II1i(933, "C5Ph"),
      "NdbiO": II1i(961, "h46D"),
      "WyZNl": II1i(535, "F!CM"),
      "drrsn": II1i(725, "GF#]"),
      "OJVEE": II1i(958, "4QFc"),
      "sssxa": "NONE",
      "GYJyg": II1i(667, "[CxF"),
      "iKoVu": II1i(881, "4QFc"),
      "hEHyZ": II1i(654, "(ttG"),
      "AAdSn": "ihqwC",
      "Fwqbc": "application/x-www-form-urlencoded",
      "HrsnB": II1i(753, "C5Ph"),
      "oYUNG": II1i(913, "lpZo"),
      "BCufo": II1i(780, "Lqo4"),
      "MtyqX": function (IIIi1, i1llli) {
        return IIIi1 > i1llli;
      },
      "lPWPK": II1i(503, "hXs0"),
      "jBOUa": function (i1llll, iI1Ili) {
        return i1llll(iI1Ili);
      },
      "byYCD": function (llIIiI, iI1111) {
        return llIIiI(iI1111);
      },
      "YwUoz": II1i(948, "F!CM"),
      "WjfEa": II1i(606, "oa5g"),
      "WrRIE": function (IIIl1, ii1ii) {
        return IIIl1 > ii1ii;
      },
      "XXXjj": function (Iii1, I1I1lI) {
        return Iii1 + I1I1lI;
      },
      "sxkUK": function (ii1il, l1iIlI) {
        return ii1il + l1iIlI;
      },
      "QKnUi": function (iI111I, IIIlI1, i1lIiI) {
        return iI111I(IIIlI1, i1lIiI);
      },
      "glMzs": function (IiiIl, ii1l1l) {
        return IiiIl + ii1l1l;
      }
    };
  if ($[II1i(862, "tDtB")]) return {
    "runEnd": !![]
  };
  const i1iIll = i1iIli[II1i(964, "GlJW")](decodeURIComponent, common[II1i(827, "qvJN")](iI1IiI, II1i(838, "tez&")));
  function i1lliI(l1lli1, IiiIi) {
    const illli1 = II1i;
    if ("gMRhb" !== i1iIli["YWDcJ"]) {
      IiiIl1[illli1(857, "mc4x")](lIIil1 + "\u8D26\u53F7\u65E0\u6548"), IIli1[illli1(748, "Lqo4")](illli1(931, "%A)b")), II1liI[illli1(700, "FRfv")][illli1(720, "ex9w")](IlI1i1);
      return;
    } else {
      if (i1iIli["QTksa"](l1lli1["length"], 4)) return l1lli1;else {
        const l1iIl1 = l1lli1[illli1(832, "u3$f")](0, 2),
          ii1iI = l1lli1[illli1(798, "Yo7y")](-2),
          IIIil = Math[illli1(548, "wDPj")](i1iIli[illli1(896, "oa5g")](i1iIli[illli1(674, "uNf8")](IiiIi, l1iIl1[illli1(527, "GlJW")]), ii1iI[illli1(928, "er#0")]), 0),
          IIIii = "*"["repeat"](IIIil);
        return i1iIli[illli1(723, "IAw^")](i1iIli[illli1(829, "f#HJ")](l1iIl1, IIIii), ii1iI);
      }
    }
  }
  const liI1l1 = decodeURIComponent(i1iIll),
    IllIlI = i1lliI(liI1l1, 6),
    IiillI = "\u3010\u8D26\u53F7" + IIlI1 + "\u3011" + IllIlI + "\uFF1A",
    ili11I = notify[II1i(560, "^lqH")](IIlI1, i1iIll);
  if (i1iIli["MtyqX"](pinFilter["length"], 0) && (pinFilter[II1i(936, "xZCM")](i1iIll) || pinFilter[II1i(494, "FRfv")](i1iIli[II1i(831, "O0d8")](encodeURIComponent, i1iIll)))) {
    ili11I[II1i(739, "IAw^")](II1i(935, "KbZc")), console["log"](ili11I[II1i(717, "3ZN[")]()), $[II1i(520, "YP[3")][II1i(661, "sEvZ")](IIlI1);
    return;
  }
  const li11l = await common[II1i(708, "tez&")](iI1IiI);
  if (!li11l && typeof li11l === "boolean") {
    if (i1iIli[II1i(643, "uNf8")](II1i(714, "wDPj"), i1iIli[II1i(615, "ci(W")])) {
      console[II1i(590, "^K(3")](IiillI + "\u8D26\u53F7\u65E0\u6548"), ili11I[II1i(539, "k^eI")](i1iIli[II1i(493, "h46D")]), $[II1i(500, "hXs0")]["push"](IIlI1);
      return;
    } else {
      if (liIl1[II1i(951, "uIpi")] && i1iIli[II1i(580, "GF#]")](II1lll[II1i(506, "mc4x")]["bizCode"], 0)) {
        let {
          rewardType: I1I1l1,
          rewardName: iI111l
        } = i11I1I[II1i(900, "h46D")]["result"];
        l1il1i -= ll1;
        let i1lIii = iI1llI[I1I1l1] || "";
        llliii[II1i(775, "f#HJ")](IllI11 + II1i(911, "%A)b") + i1lIii + iI111l + II1i(747, "6xs)") + l1llIi + "\u5956\u7968"), II1llI["insert"](II1i(830, "ci(W") + i1lIii + iI111l);
      } else {
        let III11i = i11I11[II1i(565, "ex9w")](l1llIl[II1i(486, "YP[3")]);
        ii1I1l[II1i(821, "0qS!")](ii1I1i + "\u5151\u6362\u5931\u8D25: " + III11i);
      }
    }
  }
  const lliiIl = common[II1i(519, "xZCM")](i1iIll);
  let li11i = ![],
    lliiIi,
    iiIi1I,
    IllIl1,
    ll1Ii,
    ll1Il,
    iiIi11,
    ill1II,
    i1llil,
    i1llii;
  await llIIii(II1i(943, "mc4x"));
  if (lliiIi) {
    const i1lIil = lliiIi["moreExchanges"] || [];
    ll1Ii = lliiIi["score"] || 0, li11i = lliiIi[II1i(743, "Lqo4")] || ![];
    if (!li11i) return;
    let III11l = "";
    !hasGetBasicInfo && (hasGetBasicInfo = !![], i1lIil["forEach"]((llIl1i, llIl1l) => {
      const I1lII1 = II1i,
        IiiII = llIl1i["rewardName"] || "",
        Iiil = llIl1i[I1lII1(947, "er#0")] || 0,
        IIIli = llIl1i[I1lII1(505, "4QFc")] || 0,
        ii1i1 = llIl1i[I1lII1(926, "tez&")] || 0,
        Iiii = llIl1i["hasStock"];
      IIIli !== 2 && (III11l += "[" + (llIl1l + 1) + "]" + IiiII + "[" + ii1i1 + I1lII1(594, "3ZN[") + (Iiii ? I1lII1(882, "[CxF") : I1lII1(517, "uNf8")) + I1lII1(523, "3ZN[") + Iiil + "]\n");
    }), console[II1i(954, "u3$f")]("\u5151\u6362\u5956\u54C1\uFF1A(\u6392\u9664\u4F18\u60E0\u5238)\n" + III11l));
    console[II1i(492, "tez&")](IiillI + II1i(772, "lpZo") + ll1Ii + "\u5956\u7968");
    if (exchange) {
      if (II1i(551, "%A)b") !== "sgBRp") {
        let llIl11 = i1lIil["find"](IIIll => IIIll["assignmentId"] == exchange);
        if (!llIl11) {
          console[II1i(675, "Y!ow")](IiillI + "\u5151\u6362\u503C\u53D8\u91CF\u586B\u5199\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u7684\u5151\u6362\u503C~"), $[II1i(589, "KbZc")] = !![];
          return;
        } else iiIi1I = llIl11[II1i(668, "ci(W")], IllIl1 = llIl11[II1i(650, "YP[3")], i1llii = llIl11["exchangeScore"], i1iIli[II1i(851, "YP[3")](i1llii, ll1Ii) ? console["log"](IiillI + II1i(686, "FRfv")) : i1iIli[II1i(656, "T]Xn")](IllIl1, 4) ? (await i1iIli[II1i(956, "^K(3")](llIIii, II1i(630, "hXs0")), await $["wait"](parseInt($["waitTime"] * 1 + 500, 10)), await l1i1I1()) : (await llIIii(II1i(854, "Yo7y")), await $[II1i(636, "hXs0")](i1iIli[II1i(860, "T]Xn")](parseInt, i1iIli["XXXjj"]($["waitTime"] * 1, 500), 10)));
      } else Illl1l = !![], Illl1i[II1i(822, "uNf8")]((l1llii, liII1) => {
        const Ill111 = II1i,
          I1I1ii = l1llii["rewardName"] || "",
          l1llil = l1llii[Ill111(868, "hXs0")] || 0,
          IIIlIi = l1llii[Ill111(617, "uD%l")] || 0,
          llIl1I = l1llii[Ill111(872, "^lqH")] || 0,
          i1lIl1 = l1llii[Ill111(574, "KbZc")];
        IIIlIi !== 2 && (IiiIli += "[" + i1iIli[Ill111(920, "3ZN[")](liII1, 1) + "]" + I1I1ii + "[" + llIl1I + "\u5956\u7968][" + (i1lIl1 ? Ill111(631, "IAw^") : "\u65E0\u5E93\u5B58") + Ill111(613, "u2z6") + l1llil + "]\n");
      }), l1lIii[II1i(816, "k^eI")](II1i(953, "uNf8") + I11iI1);
    } else {
      if (i1iIli[II1i(776, "^lqH")]("RUQhz", II1i(576, "^K(3"))) {
        let liIli1 = i1lIil[II1i(598, "Lqo4")](IIIlIl => IIIlIl[II1i(934, "Yo7y")] == rewardType_map["\u4EAC\u8C46"])[II1i(929, "FRfv")]((IIIlI, IiiI) => {
          const I1iI11 = II1i;
          if (i1iIli["PcHLQ"](i1iIli[I1iI11(670, "Lqo4")], I1iI11(485, "u2z6"))) return IiiI[I1iI11(477, "fhqt")] - IIIlI[I1iI11(859, "6H0p")];else lilIil[I1iI11(707, "ex9w")]("\u26A0 \u81EA\u5B9A\u4E49\u8FD0\u884C\u95F4\u9694\u65F6\u957F\u8BBE\u7F6E\u9519\u8BEF");
        });
        for (let l1iIll of liIli1) {
          if (!l1iIll["hasStock"] || ll1Ii < l1iIll["exchangeScore"]) continue;
          i1llii = l1iIll["exchangeScore"], iiIi1I = l1iIll["assignmentId"], IllIl1 = l1iIll[II1i(487, "^lqH")], await i1iIli[II1i(876, "FRfv")](llIIii, II1i(521, "lpZo")), await $[II1i(501, "ci(W")](parseInt(i1iIli[II1i(678, "0qS!")](i1iIli["DwGDX"]($[II1i(702, "(X0u")], 1), 500), 10));
        }
      } else ll1il[II1i(642, "hXs0")](IiiIiI + "\u2705 \u63D0\u73B0\u6210\u529F"), lilii[II1i(877, "h46D")](II1i(849, "6xs)") + l1iiI?.["amount"] + "\uD83D\uDCB0");
    }
    autotx && (await l1i1I1(), await $[II1i(501, "ci(W")](parseInt(i1iIli[II1i(663, "k^eI")]($[II1i(850, "Fea]")] * 1, 5000), 10)));
  }
  if ($["runEnd"]) return {
    "runEnd": !![]
  };
  await $[II1i(705, "YP[3")](i1iIli[II1i(482, "f#HJ")](parseInt, i1iIli[II1i(624, "KbZc")]($[II1i(550, "hXs0")] * 1, 500), 10));
  async function l1i1I1() {
    const II11 = II1i,
      iIi1l = {
        "qXgAc": function (i1lIlI, l1lliI) {
          return i1lIlI - l1lliI;
        }
      };
    if (i1iIli["jPIuA"](i1iIli[II11(924, "tDtB")], II11(806, "h46D"))) {
      ll1Il = "", await i1iIli["mTgwK"](llIIii, i1iIli[II11(889, "lpZo")]), await $[II11(835, "u3$f")](parseInt($["waitTime"] * 1 + 500, 10));
      if (ll1Il) {
        if (II11(869, "mc4x") === i1iIli[II11(940, "ex9w")]) {
          let IIIlII = illIl1["getErrorMsg"](l1llII["data"]);
          IilIll[II11(481, "oa5g")](lI11Ii + II11(812, "^K(3") + IIIlII);
        } else {
          const iiIiI1 = (ll1Il[II11(797, "f#HJ")] || [])[II11(788, "O0d8")](ili1Il => ili1Il[II11(595, "%A)b")] === 4 && ili1Il["state"] === 0 || ili1Il["state"] === 2);
          if (iiIiI1[II11(528, "k^eI")] > 0) console[II11(775, "f#HJ")]("");
          for (i = 0; i1iIli[II11(657, "^lqH")](i, iiIiI1[II11(575, "qvJN")]); i++) {
            if (i1iIli[II11(626, "hXs0")] === i1iIli["iudug"]) {
              const ili1Ii = iiIiI1[i];
              console[II11(864, "uea*")](IiillI + II11(610, "%A)b") + ili1Ii?.[II11(649, "6O1$")] + II11(507, "(ttG") + ili1Ii["id"] + "]"), ill1II = {
                "prizeType": 4,
                "business": business,
                "id": ili1Ii["id"],
                "poolBaseId": ili1Ii[i1iIli[II11(479, "6H0p")]],
                "prizeGroupId": ili1Ii[II11(533, "tez&")],
                "prizeBaseId": ili1Ii[i1iIli[II11(637, "FRfv")]],
                "activityId": "1999"
              }, iiIi11 = "", await llIIii(i1iIli[II11(790, "uD%l")]);
              if (iiIi11) {
                if (i1iIli[II11(639, "^K(3")](II11(687, "4QFc"), i1iIli[II11(945, "4QFc")])) {
                  const Iilll1 = iiIi11[II11(559, "h46D")],
                    ll11I = iiIi11[II11(834, "6O1$")];
                  if (i1iIli[II11(952, "(X0u")](Iilll1, i1iIli[II11(659, "6xs)")])) i1iIli[II11(491, "Y!ow")](i1iIli[II11(545, "IAw^")], II11(763, "6H0p")) ? (console[II11(492, "tez&")](IiillI + II11(587, "k^eI")), ili11I["insert"](II11(703, "(ttG") + ili1Ii?.[II11(716, "4QFc")] + "\uD83D\uDCB0")) : (lilIl1[II11(728, "GlJW")](i1l1ii[II11(923, "tez&")], II11(676, "0qS!")), i1l1[II11(711, "uNf8")](1));else {
                    let liIIl = ![],
                      IlI1lI = 0;
                    if (ll11I["includes"]("\u4E0A\u9650") || ll11I[II11(949, "ex9w")](II11(692, "(ttG")) || ll11I[II11(538, "er#0")]("\u672A\u7ED1\u5B9A\u5FAE\u4FE1") || ll11I[II11(823, "6xs)")](i1iIli[II11(899, "hXs0")])) {
                      if (i1iIli[II11(572, "lpZo")](II11(759, "oa5g"), II11(941, "Fea]"))) {
                        let IilllI = iIli1l[II11(904, "uD%l")](i1i1II[II11(622, "oa5g")]);
                        liiIIl[II11(816, "k^eI")](iil1iI + "\u5151\u6362\u5931\u8D25: " + IilllI);
                      } else console[II11(738, "u2z6")](IiillI + "\u274C \u63D0\u73B0\u5931\u8D25: " + ll11I + II11(706, "^lqH")), i1llil = {
                        "linkId": linkId,
                        "business": business,
                        "drawRecordId": ili1Ii["id"],
                        "poolId": ili1Ii[i1iIli[II11(727, "mc4x")]],
                        "prizeGroupId": ili1Ii[II11(965, "KbZc")],
                        "prizeId": ili1Ii[i1iIli[II11(865, "^K(3")]],
                        "activityId": i1iIli[II11(770, "^K(3")]
                      }, await llIIii(II11(680, "Fea]")), await $["wait"](parseInt($["waitTime"] * 1 + 500, 10));
                    } else ll11I["includes"]("\u5DF2\u5B58\u5728\u72B6\u6001") ? (console[II11(536, "(ttG")](IiillI + "\u274C \u63D0\u73B0\u5931\u8D25\uFF1A\u4E0A\u4E00\u7B14\u63D0\u73B0\u8FD8\u672A\u5B8C\u6210"), liIIl = !![]) : console["log"](IiillI + II11(712, "f#HJ") + ll11I);
                    while (liIIl && IlI1lI < 3) {
                      await $[II11(957, "ex9w")](parseInt(i1iIli[II11(607, "uNf8")](Math[II11(573, "0qS!")]() * 2000, 95000), 10)), await llIIii(II11(879, "^lqH"));
                      const iI1lIi = iiIi11[II11(917, "%A)b")],
                        l1lllI = iiIi11[II11(873, "mc4x")];
                      if (iI1lIi === i1iIli["VqMcg"]) console[II11(791, "uNf8")](IiillI + II11(921, "KbZc")), ili11I[II11(721, "(X0u")](II11(651, "O0d8") + ili1Ii?.[II11(817, "u3$f")] + "\uD83D\uDCB0"), liIIl = ![];else l1lllI[II11(609, "u2z6")](i1iIli["KFQFT"]) ? IlI1lI++ : (console["log"](IiillI + "\u274C \u63D0\u73B0\u5931\u8D25\uFF1A" + iI1lIi), liIIl = ![]);
                    }
                  }
                  i !== i1iIli[II11(909, "4QFc")](iiIiI1[II11(825, "Y!ow")], 1) && (II11(549, "hXs0") === "TOyXs" ? await $[II11(734, "lpZo")](i1iIli[II11(918, "KbZc")](parseInt, i1iIli["YNeqk"](Math[II11(800, "6xs)")]() * 2000, 5000), 10)) : lilIIl["log"](ililIl));
                } else illIlI = liIiI[II11(946, "u2z6")][II11(769, "tez&")];
              }
            } else {
              const ll11ii = I1llii[II11(922, "T]Xn")](0, 2),
                liIlii = lilIll["slice"](-2),
                llii1l = l1i111["max"](iIi1l[II11(905, "6xs)")](iIi1l[II11(540, "sEvZ")](iliII1, ll11ii[II11(569, "Lqo4")]), liIlii[II11(528, "k^eI")]), 0),
                liIlil = "*"[II11(483, "uIpi")](llii1l);
              return ll11ii + liIlil + liIlii;
            }
          }
        }
      }
      await $[II11(530, "C5Ph")](parseInt(i1iIli["DwGDX"]($["waitTime"], 1) + 500, 10));
    } else I11iIl[II11(738, "u2z6")](l1l11l + II11(623, "Qa!8") + IilIil), l1iIi = ![];
  }
  async function llIIil(ll11il, iI1lIl) {
    const l1ilII = II1i;
    if (i1iIli["utdsl"](l1ilII(819, "Lqo4"), i1iIli["evChn"])) i1l1iI[l1ilII(793, "wDPj")](liil1l, lI1lii);else try {
      switch (ll11il) {
        case "wanyiwan_exchange_page":
          if (iI1lIl["code"] == 0) {
            if (i1iIli[l1ilII(867, "mc4x")](i1iIli[l1ilII(515, "oa5g")], l1ilII(754, "F!CM"))) {
              if (iI1lIl["data"] && i1iIli["utdsl"](iI1lIl["data"][l1ilII(742, "F!CM")], 0)) lliiIi = iI1lIl["data"][l1ilII(583, "fhqt")];else {
                if (i1iIli["bugBa"](i1iIli[l1ilII(554, "uea*")], i1iIli[l1ilII(883, "f#HJ")])) II1lii += "[" + (lIIii1 + 1) + "]" + ll1i1 + "[" + IIli1i + "\u5956\u7968][" + (I1iIi1 ? l1ilII(632, "wDPj") : l1ilII(517, "uNf8")) + l1ilII(914, "hXs0") + lliil1 + "]\n";else {
                  let iIi11 = common[l1ilII(653, "u2z6")](iI1lIl[l1ilII(826, "sEvZ")]);
                  console[l1ilII(752, "4QFc")](IiillI + l1ilII(620, "sEvZ") + iIi11);
                }
              }
            } else il1iIl[l1ilII(612, "Lqo4")](iii1ii, il1iIi);
          } else {
            let ll11lI = common[l1ilII(679, "Fea]")](iI1lIl);
            console[l1ilII(552, "O0d8")](IiillI + l1ilII(570, "tez&") + ll11lI);
            return;
          }
          break;
        case i1iIli["ZQBbJ"]:
        case l1ilII(662, "qvJN"):
          if (i1iIli[l1ilII(930, "FRfv")](iI1lIl[l1ilII(658, "6xs)")], 0)) {
            if (iI1lIl["data"] && iI1lIl[l1ilII(765, "er#0")]["bizCode"] === 0) {
              if (l1ilII(616, "ci(W") === i1iIli[l1ilII(581, "u3$f")]) {
                let {
                  rewardType: llliI1,
                  rewardName: liIII
                } = iI1lIl[l1ilII(847, "Lqo4")][l1ilII(582, "uNf8")];
                ll1Ii -= i1llii;
                let llii11 = rewardType_table[llliI1] || "";
                console[l1ilII(664, "^lqH")](IiillI + "\u5151\u6362\u6210\u529F: " + llii11 + liIII + l1ilII(673, "YP[3") + ll1Ii + "\u5956\u7968"), ili11I[l1ilII(732, "FRfv")](l1ilII(514, "C5Ph") + llii11 + liIII);
              } else lilil[l1ilII(906, "(X0u")](ll1ll + l1ilII(840, "uea*")), Illl11 = !![];
            } else {
              if ("LYqiP" !== i1iIli[l1ilII(828, "3ZN[")]) {
                let ll11l1 = common[l1ilII(767, "GlJW")](iI1lIl["data"]);
                console["log"](IiillI + l1ilII(884, "4QFc") + ll11l1);
              } else i1III["log"]("\u274C \u811A\u672C\u8FD0\u884C\u9047\u5230\u4E86\u9519\u8BEF\n" + Ii1iIi);
            }
          } else {
            if (i1iIli[l1ilII(841, "uD%l")] === i1iIli["ozNdw"]) {
              let llliII = common["getErrorMsg"](iI1lIl);
              console[l1ilII(792, "uIpi")](IiillI + "\u5151\u6362\u5931\u8D25: " + llliII);
              return;
            } else liiIIi = lil11I[l1ilII(696, "Fea]")];
          }
          break;
        case i1iIli[l1ilII(603, "6xs)")]:
          if (i1iIli["QqTNW"](iI1lIl["code"], 0)) {
            if (iI1lIl["success"] === !![]) ll1Il = iI1lIl[l1ilII(689, "%A)b")];else {
              if ("OfewJ" !== l1ilII(495, "O0d8")) IiiIii[l1ilII(942, "GF#]")](IIlll + "\u2705 \u63D0\u73B0\u6210\u529F"), liliI[l1ilII(794, "O0d8")]("\u6210\u529F\u63D0\u73B0" + ll1lI?.[l1ilII(855, "^K(3")] + "\uD83D\uDCB0"), l1iii = ![];else {
                let liIliI = common[l1ilII(563, "0qS!")](iI1lIl[l1ilII(677, "C5Ph")]);
                console[l1ilII(799, "lpZo")](IiillI + l1ilII(960, "u3$f") + liIliI);
              }
            }
          } else {
            if (l1ilII(880, "(X0u") === l1ilII(789, "Fea]")) illlIl = i11ill[l1ilII(665, "6xs)")];else {
              let iiIiIi = common[l1ilII(565, "ex9w")](iI1lIl);
              console[l1ilII(752, "4QFc")](IiillI + l1ilII(532, "h46D") + iiIiIi);
            }
          }
          break;
        case i1iIli[l1ilII(944, "tDtB")]:
          if (iI1lIl[l1ilII(853, "oa5g")] === 0) {
            if (i1iIli[l1ilII(480, "[CxF")](l1ilII(634, "FRfv"), "lomRU")) I1ilIi[l1ilII(695, "KbZc")](IiiiI + l1ilII(591, "tez&") + llIlli);else {
              if (i1iIli["QqTNW"](iI1lIl["success"], !![])) iiIi11 = iI1lIl[l1ilII(531, "3ZN[")];else {
                let IilI = common["getErrorMsg"](iI1lIl[l1ilII(593, "xZCM")]);
                console["log"](IiillI + "\u63D0\u73B0\u5931\u8D25: " + IilI);
              }
            }
          } else {
            let liIlli = common[l1ilII(758, "h46D")](iI1lIl);
            console[l1ilII(618, "sEvZ")](IiillI + l1ilII(805, "f#HJ") + liIlli);
          }
          break;
        case l1ilII(558, "wDPj"):
          if (iI1lIl[l1ilII(843, "6H0p")] === 0) {
            if (i1iIli[l1ilII(683, "fhqt")] === i1iIli[l1ilII(557, "f#HJ")]) {
              let Iillll = ill11l[l1ilII(904, "uD%l")](I1lIiI);
              lllili["log"](IliiiI + l1ilII(824, "k^eI") + Iillll);
            } else {
              if (i1iIli[l1ilII(950, "^K(3")](iI1lIl[l1ilII(544, "oa5g")], !![])) i1iIli[l1ilII(863, "xZCM")](l1ilII(660, "YP[3"), i1iIli[l1ilII(795, "KbZc")]) ? (console[l1ilII(858, "6O1$")]("\u2705 \u5151\u6362\u7EA2\u5305\u6210\u529F"), ili11I[l1ilII(731, "6xs)")](l1ilII(553, "Fea]"))) : (iiillI[l1ilII(552, "O0d8")]("\u2705 \u5151\u6362\u7EA2\u5305\u6210\u529F"), l1l111[l1ilII(959, "Fea]")](l1ilII(508, "IAw^")));else {
                let III11I = common["getErrorMsg"](iI1lIl[l1ilII(719, "4QFc")]);
                console[l1ilII(842, "h46D")](IiillI + "\u5151\u6362\u5931\u8D25: " + III11I);
              }
            }
          } else {
            if (i1iIli["ZyVsU"](l1ilII(722, "YP[3"), i1iIli[l1ilII(801, "Y!ow")])) {
              let Ilii1 = common[l1ilII(525, "k^eI")](iI1lIl);
              console["log"](IiillI + "\u5151\u6362\u5931\u8D25: " + Ilii1);
            } else {
              const ili1I1 = iI1lli[l1ilII(733, "[CxF")] || "",
                Iill = ll1iI[l1ilII(871, "IAw^")] || 0,
                ili1II = iI1lll[l1ilII(919, "qvJN")] || 0,
                liIllI = l1lIll[l1ilII(963, "ex9w")] || 0,
                ll11i = I1l1II["hasStock"];
              i1iIli[l1ilII(666, "KbZc")](ili1II, 2) && (llIliI += "[" + i1iIli[l1ilII(895, "6xs)")](I1l1I1, 1) + "]" + ili1I1 + "[" + liIllI + "\u5956\u7968][" + (ll11i ? l1ilII(511, "T]Xn") : "\u65E0\u5E93\u5B58") + l1ilII(786, "^lqH") + Iill + "]\n");
            }
          }
          break;
      }
    } catch (iI1lI1) {
      console[l1ilII(740, "C5Ph")](IiillI + l1ilII(837, "T]Xn") + ll11il + " \u8BF7\u6C42\u54CD\u5E94 " + (iI1lI1["message"] || iI1lI1));
    }
  }
  async function llIIii(I1I1li) {
    const iliIll = II1i,
      l1i11 = {
        "rKtcZ": function (IlI1li, IlI1ll) {
          const ii1II1 = iii1II;
          return i1iIli[ii1II1(907, "T]Xn")](IlI1li, IlI1ll);
        }
      };
    if (i1iIli[iliIll(537, "tez&")](i1iIli[iliIll(638, "tDtB")], i1iIli[iliIll(685, "6H0p")])) l1iil++;else {
      if ($["runEnd"]) return;
      let III111 = "",
        liIll1 = null,
        l1llli = null,
        iI1lII = "POST",
        ll11iI = {},
        l1i1I = {};
      switch (I1I1li) {
        case i1iIli["ESIAo"]:
          III111 = i1iIli[iliIll(599, "f#HJ")], liIll1 = {
            "functionId": I1I1li,
            "body": JSON[iliIll(640, "4QFc")]({
              "version": 1
            }),
            "rfs": i1iIli[iliIll(713, "O0d8")],
            "appid": "signed_wh5",
            "t": Date[iliIll(848, "wDPj")](),
            "client": i1iIli[iliIll(844, "uIpi")],
            "clientVersion": common[iliIll(760, "F!CM")]()
          };
          break;
        case iliIll(614, "h46D"):
          III111 = iliIll(777, "xZCM"), liIll1 = {
            "functionId": I1I1li,
            "body": JSON["stringify"]({
              "assignmentId": iiIi1I,
              "type": IllIl1,
              "version": 1
            }),
            "rfs": i1iIli[iliIll(878, "Qa!8")],
            "appid": i1iIli[iliIll(938, "(ttG")],
            "t": Date["now"](),
            "client": i1iIli[iliIll(596, "4QFc")],
            "clientVersion": common["getLatestAppVersion"]()
          };
          break;
        case i1iIli["ZQBbJ"]:
          III111 = i1iIli[iliIll(601, "KbZc")], liIll1 = {
            "functionId": I1I1li,
            "body": JSON["stringify"]({
              "assignmentId": iiIi1I,
              "type": IllIl1,
              "version": 1
            }),
            "rfs": i1iIli[iliIll(592, "4QFc")],
            "appid": iliIll(577, "uIpi"),
            "t": Date[iliIll(762, "C5Ph")](),
            "client": i1iIli["iTiWH"],
            "clientVersion": common[iliIll(866, "YP[3")]()
          };
          break;
        case "superRedBagList":
          l1i1I = {
            "appId": i1iIli["NdbiO"],
            "functionId": i1iIli["WLRow"],
            "appid": "activities_platform",
            "clientVersion": common[iliIll(488, "6xs)")](),
            "client": iliIll(751, "mc4x"),
            "body": {
              "pageNum": 1,
              "pageSize": 400,
              "linkId": linkId,
              "associateLinkId": "",
              "business": business
            },
            "version": i1iIli["WyZNl"],
            "ua": $["UA"],
            "t": !![]
          }, ll11iI = await H5st[iliIll(489, "IAw^")](l1i1I), III111 = iliIll(499, "er#0"), liIll1 = ll11iI[iliIll(567, "[CxF")];
          break;
        case i1iIli["DogWK"]:
          l1i1I = {
            "appId": "73bca",
            "functionId": i1iIli["DogWK"],
            "appid": i1iIli["drrsn"],
            "clientVersion": common["getLatestAppVersion"](),
            "client": i1iIli[iliIll(836, "T]Xn")],
            "body": {
              "linkId": linkId,
              "businessSource": i1iIli[iliIll(529, "F!CM")],
              "base": ill1II
            },
            "version": i1iIli[iliIll(796, "oa5g")],
            "ua": $["UA"],
            "t": !![]
          }, ll11iI = await H5st[iliIll(744, "4QFc")](l1i1I), III111 = iliIll(730, "(ttG"), liIll1 = ll11iI[iliIll(647, "xZCM")];
          break;
        case i1iIli[iliIll(512, "u2z6")]:
          l1i1I = {
            "appId": iliIll(669, "%A)b"),
            "functionId": iliIll(478, "3ZN["),
            "appid": i1iIli["drrsn"],
            "clientVersion": common[iliIll(967, "uD%l")](),
            "client": iliIll(768, "^lqH"),
            "body": i1llil,
            "version": iliIll(484, "YP[3"),
            "ua": $["UA"],
            "t": !![]
          }, ll11iI = await H5st[iliIll(534, "T]Xn")](l1i1I), III111 = i1iIli[iliIll(808, "er#0")], liIll1 = ll11iI[iliIll(887, "oa5g")];
          break;
        default:
          console["log"](IiillI + "\u274C \u672A\u77E5\u8BF7\u6C42 " + I1I1li);
          return;
      }
      const l1llll = {};
      if (liIll1) {
        if (i1iIli[iliIll(815, "6O1$")] === i1iIli[iliIll(901, "tDtB")]) Object[iliIll(684, "T]Xn")](liIll1, l1llll);else {
          let lil1l = llI1Il[iliIll(783, "sEvZ")](ii1iii);
          i11iil["log"](Ill1i + iliIll(874, "^lqH") + lil1l);
        }
      }
      if (l1llli) {
        if (iliIll(782, "uea*") === i1iIli[iliIll(644, "YP[3")]) Object[iliIll(955, "O0d8")](l1llli, l1llll);else {
          if (IlIlli[iliIll(648, "IAw^")] === !![]) iil1il = ilil1I["data"];else {
            let Iliii = i11il1["getErrorMsg"](ii1iiI[iliIll(719, "4QFc")]);
            lllilI[iliIll(681, "qvJN")](ilil11 + iliIll(726, "F!CM") + Iliii);
          }
        }
      }
      const I1I1ll = {
        "url": III111,
        "method": iI1lII,
        "headers": {
          "origin": "https://prodev.m.jd.com",
          "Referer": iliIll(764, "er#0"),
          "User-Agent": lliiIl,
          "Cookie": iI1IiI,
          "content-type": i1iIli[iliIll(912, "oa5g")],
          "accept": i1iIli[iliIll(715, "ex9w")],
          "x-rp-client": i1iIli["oYUNG"]
        },
        "params": l1llli,
        "data": liIll1,
        "timeout": 30000
      };
      if (iI1lII === iliIll(820, "u3$f")) {
        if (iliIll(701, "uNf8") !== iliIll(704, "tDtB")) delete I1I1ll[iliIll(932, "[CxF")], delete I1I1ll[iliIll(927, "Yo7y")][i1iIli["BCufo"]];else return Iliill;
      }
      const lil1i = 1;
      let liiiil = 0,
        IIIIli = null;
      while (liiiil < lil1i) {
        if (i1iIli["MtyqX"](liiiil, 0)) {
          if ("qiOWB" === i1iIli[iliIll(761, "uD%l")]) await $[iliIll(915, "[CxF")](1000);else {
            if (i1iIli[iliIll(937, "4QFc")](li1Ii[iliIll(566, "hXs0")], 4)) return IIII1I;else {
              const I1iI1i = Iii111[iliIll(597, "^lqH")](0, 2),
                l1i1l = l1l1II["slice"](-2),
                I1iI1l = Iil1I1["max"](Ii1iII - I1iI1i[iliIll(925, "ex9w")] - l1i1l[iliIll(578, "uNf8")], 0),
                illlil = "*"["repeat"](I1iI1l);
              return I1iI1i + illlil + l1i1l;
            }
          }
        }
        const I1lIIi = await common["request"](I1I1ll);
        if (!I1lIIi["success"]) {
          if (iliIll(633, "YP[3") === "ovrJc") {
            IIIIli = "" + IiillI + I1I1li + " \u8BF7\u6C42\u5931\u8D25 \u279C " + I1lIIi[iliIll(757, "hXs0")], liiiil++;
            continue;
          } else {
            const I1lIIl = l1i11[iliIll(611, "Qa!8")](lI1Iil, lilIiI);
            I1lIIl >= 0 && (IiilIi[iliIll(518, "f#HJ")] = I1lIIl);
          }
        }
        if (!I1lIIi[iliIll(811, "0qS!")]) {
          IIIIli = "" + IiillI + I1I1li + iliIll(690, "wDPj"), liiiil++;
          continue;
        }
        await llIIil(I1I1li, I1lIIi[iliIll(846, "O0d8")]);
        break;
      }
      liiiil >= lil1i && console[iliIll(492, "tez&")](IIIIli);
    }
  }
}
var version_ = "jsjiami.com.v7";
// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}