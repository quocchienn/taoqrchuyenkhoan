 const banks = [
  { id: "ABB", name: "ABBANK", logo: "https://i.postimg.cc/7hmLngvc/ABBANK.png" },
  { id: "CAKE", name: "CAKE Bank", logo: "https://api.vietqr.io/img/CAKE.png" },
  { id: "CIMB", name: "CIMB Bank", logo: "https://api.vietqr.io/img/CIMB.png" },
  { id: "ACB", name: "ACB", logo: "https://api.vietqr.io/img/ACB.png" },
    { id: "MOMO", name: "Momo", logo: "https://i.postimg.cc/HWcHZDwn/Mo-Mo-Tr-th-T-i-ch-nh-v-i-AI.png" },
  { id: "ZALOPAY", name: "ZaloPay", logo: "https://i.postimg.cc/mD0xfkYD/Zalopay-Thanh-To-n-T-ch-Th-ng.png" },
  { id: "VIETTELMONEY", name: "Viettel Money", logo: "https://api.vietqr.io/img/VIETTELMONEY.png" },
  { id: "VNPTPAY", name: "VNPT Pay", logo: "https://i.postimg.cc/4NP8pnY9/VNPT-Money.png" },
  { id: "SHOPEEPAY", name: "ShopeePay", logo: "https://i.postimg.cc/bwvmg8nF/Shopee-Pay-V-v-n-d-ch-v.png" },
  { id: "ALRPAY", name: "AlrPay", logo: "https://i.postimg.cc/zfspqgc9/Alipay-Simplify-Your-Life.png" }, // Airpay cũ (ShopeePay bây giờ)
  { id: "VNPAY", name: "VNPay", logo: "https://i.postimg.cc/TwjjGHmD/VNPAY-App.png" },
  { id: "PAYOO", name: "Payoo", logo: "https://i.postimg.cc/rm2GBLdT/Payoo.png" },
  { id: "AGRIBANK", name: "Agribank", logo: "https://i.postimg.cc/B65btrmJ/Agribank-Plus.png" },
  { id: "BACABANK", name: "Bac A Bank", logo: "https://i.postimg.cc/63xTWWLH/BAC-A-BANK-Mobile-Banking.png" },
  { id: "BAOVIETBANK", name: "Bảo Việt Bank", logo: "https://i.postimg.cc/bwMs5HGf/IMG-4553.png" },
  { id: "BIDV", name: "BIDV", logo: "https://api.vietqr.io/img/BIDV.png" },
  { id: "EXIMBANK", name: "Eximbank", logo: "https://i.postimg.cc/fWjSb9PY/Eximbank-EDigi.png" },
  { id: "HDB", name: "HDBank", logo: "https://i.postimg.cc/rpBRDCcN/HDBank.png" },
  { id: "HLBANK", name: "Hong Leong Bank", logo: "https://i.postimg.cc/kgDmL08B/HLB-Connect-Vietnam.png" },
  { id: "IBK", name: "IBK Bank", logo: "https://api.vietqr.io/img/IBK.png" },
  { id: "INDOVINABANK", name: "Indovina Bank", logo: "https://i.postimg.cc/yY1Byg8h/IVB-Mobile-Banking.png" },
  { id: "KIENLONGBANK", name: "KienlongBank", logo: "https://i.postimg.cc/FFgNSgNs/Kienlong-Bank-Plus.png" },
  { id: "LPB", name: "LienVietPostBank", logo: "https://api.vietqr.io/img/LPB.png" },
  { id: "MSB", name: "MSB", logo: "https://api.vietqr.io/img/MSB.png" },
  { id: "MBBANK", name: "MB Bank", logo: "https://i.postimg.cc/zGPJBz5C/MB-Bank.png" },
  { id: "NAMABANK", name: "Nam A Bank", logo: "https://i.postimg.cc/437XHDNr/NAM-A-BANK-OPEN-BANKING.png" },
  { id: "NCB", name: "NCB", logo: "https://api.vietqr.io/img/NCB.png" },
  { id: "OCB", name: "OCB", logo: "https://api.vietqr.io/img/OCB.png" },
  { id: "OCEANBANK", name: "OceanBank", logo: "https://api.vietqr.io/img/OCEANBANK.png" },
  { id: "PGBANK", name: "PG Bank", logo: "https://i.postimg.cc/Pfmr4nzH/PGBank-App.png" },
  { id: "PBVN", name: "Public Bank Vietnam", logo: "https://api.vietqr.io/img/PBVN.png" },
  { id: "PVCOMBANK", name: "PVcomBank", logo: "https://i.postimg.cc/VvBfLXLv/PVcom-Bank-m-Pos.png" },
  { id: "SACOMBANK", name: "Sacombank", logo: "https://i.postimg.cc/HW771Nwv/Sacombank-m-Banking.png" },
  { id: "SAIGONBANK", name: "SaigonBank", logo: "https://i.postimg.cc/PJZLbLfn/SAIGONBANK-Smart-Banking.png" },
  { id: "SCB", name: "SCB", logo: "https://api.vietqr.io/img/SCB.png" },
  { id: "SEABANK", name: "SeABank", logo: "https://i.postimg.cc/ht0d37LS/Se-AMobile.png" },
  { id: "SHB", name: "SHB", logo: "https://api.vietqr.io/img/SHB.png" },
  { id: "SHBVN", name: "Shinhan Bank", logo: "https://i.postimg.cc/c6yxdXNV/Shinhan-SOL-Vietnam.png" },
  { id: "STANDARDCHARTERED", name: "Standard Chartered", logo: "https://i.postimg.cc/Jz3nzV0K/SC-Mobile-Vietnam.png" },
  { id: "TPB", name: "TPBank", logo: "https://i.postimg.cc/RFdK6J0s/TPBank-Mobile.png" },
  { id: "UNITEDOVERSEAS", name: "United Overseas Bank", logo: "https://api.vietqr.io/img/UOB.png" },
  { id: "VIB", name: "VIB", logo: "https://api.vietqr.io/img/VIB.png" },
  { id: "VIETABANK", name: "VietABank", logo: "https://i.postimg.cc/BQV5BFBR/Viet-ABank-Ez-Mobile.png" },
  { id: "VIETBANK", name: "VietBank", logo: "https://api.vietqr.io/img/VIETBANK.png" },
  { id: "VIETCOMBANK", name: "Vietcombank", logo: "https://i.postimg.cc/bw4TpnG1/VCB-Digibank.png" },
  { id: "VIETINBANK", name: "VietinBank", logo: "https://i.postimg.cc/Gm4QWKpc/Vietin-Bank-i-Pay.png" },
  { id: "VPBANK", name: "VPBank", logo: "https://i.postimg.cc/SK8GsK83/VPBank-NEO.png" },
  { id: "VRB", name: "VRB", logo: "https://api.vietqr.io/img/VRB.png" },
  { id: "WOORIBANK", name: "Woori Bank", logo: "https://i.postimg.cc/h40pThwq/Woori-WON-Vietnam.png" }
];

const bankSelect = document.getElementById('bankSelect');
const selectSelected = bankSelect.querySelector('.select-selected');
const selectItems = bankSelect.querySelector('.select-items');

banks.forEach(bank => {
  const div = document.createElement('div');
  div.innerHTML = `<img src="${bank.logo}" alt="${bank.name}">${bank.name}`;
  div.dataset.bankId = bank.id;
  div.onclick = function() {
    selectSelected.innerHTML = `<img src="${bank.logo}" alt="${bank.name}">${bank.name}`;
    selectSelected.dataset.bankId = bank.id;
    selectItems.style.display = 'none';
  };
  selectItems.appendChild(div);
});

selectSelected.onclick = function() {
  selectItems.style.display = selectItems.style.display === 'flex' ? 'none' : 'flex';
};

document.addEventListener('click', function(e) {
  if (!bankSelect.contains(e.target)) {
    selectItems.style.display = 'none';
  }
});

document.getElementById('qrForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const accountName = document.getElementById('accountName').value.trim();
  const accountNo = document.getElementById('accountNo').value.trim();
  const bankId = selectSelected.dataset.bankId;
  const amount = document.getElementById('amount').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!accountName || !accountNo || !bankId) {
    alert('Vui lòng nhập đầy đủ thông tin.');
    return;
  }

  const url = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?accountName=${encodeURIComponent(accountName)}${amount ? `&amount=${amount}` : ''}${description ? `&addInfo=${encodeURIComponent(description)}` : ''}`;

  document.getElementById('qrCode').innerHTML = `<img src="${url}" alt="QR Code">`;
});
