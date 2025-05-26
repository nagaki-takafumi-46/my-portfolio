// スペック表示・非表示
document.getElementById("toggleSpecs").addEventListener("click", function() {
  const specTable = document.getElementById("specTable");
  if (specTable.style.display === "none") {
      specTable.style.display = "table";
      this.textContent = "スペックを隠す";
  } else {
      specTable.style.display = "none";
      this.textContent = "スペックを表示";
  }
});

// 車検表示 非表示
document.getElementById("toggleVehicleinspections").addEventListener("click", function() {
  const vehicleinspectionTable = document.getElementById("vehicleinspectionTable");
  if (vehicleinspectionTable.style.display === "none") {
      vehicleinspectionTable.style.display = "table";
      this.textContent = "車検を隠す";
  } else {
      vehicleinspectionTable.style.display = "none";
      this.textContent = "車検を表示";
  }
});

// オイル交換表示 非表示
document.getElementById("toggleOilexchanges").addEventListener("click", function() {
  const oilexchangeTable = document.getElementById("oilexchangeTable");
  if (oilexchangeTable.style.display === "none") {
      oilexchangeTable.style.display = "table";
      this.textContent = "オイル交換を隠す";
  } else {
      oilexchangeTable.style.display = "none";
      this.textContent = "オイル交換を表示";
  }
});

// メンテナンス表示・非表示
document.getElementById("toggleMaintenances").addEventListener("click", function() {
  const maintenanceTable = document.getElementById("maintenanceTable");
  if (maintenanceTable.style.display === "none") {
      maintenanceTable.style.display = "table";
      this.textContent = "メンテナンスを隠す";
  } else {
      maintenanceTable.style.display = "none";
      this.textContent = "メンテナンスを表示";
  }
});

// 画像クリックで拡大表示
const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("close");

thumbnails.forEach(img => {
  img.addEventListener("click", function() {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
  });
});

// 閉じるボタン
closeBtn.addEventListener("click", function() {
  lightbox.style.display = "none";
});

// フォーム送信時の入力チェック
document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      alert("すべての項目を入力してください。");
      event.preventDefault(); // フォーム送信をキャンセル
  }
});
