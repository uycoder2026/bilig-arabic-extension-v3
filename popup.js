// ============================================================================
// بىلىگ ئەرەبچە ئۆگىنىش قىستۇرمىسى - يادرولۇق پىروگرامما لوگىكىسى (Manifest V3)
// نۆل ئىز قوغلاش، %100 يەرلىك ساقلاش، ئەرەبچە-ئۇيغۇرچە ئاۋازلىق ئوقۇش ۋە ئاۋاز ھۆججىتى بىلەن ھەمبەھىرلەش
// ============================================================================

"use strict";

const BILIG_SENTENCES = [
  // 1-گۇرۇپپا: سالاملىشىش ۋە ئەدەپ-ئەخلاق
  {
    id: 1,
    category: "سالام ۋە ئەھۋال سوراش",
    arabic: "السلام عليكم، شلونك اليوم؟ إن شاء الله بخير.",
    phonetic: "ئەسسالامۇ ئەلەيكۇم، شلوٰنەك ئىليوم؟ ئىنشائاللاھ بخەير.",
    uyghur: "ئەسسالامۇ ئەلەيكۇم، بۈگۈن ئەھۋالىڭىز قانداق؟ ئىنشائاللاھ ياخشىسىز.",
    context: "مۇسۇلمانلار ئوتتۇرىسىدىكى ئەڭ گۈزەل سالامدىن كېيىن، سۈرىيە لەھجىسىدە يېقىنلىق بىلەن ئەھۋال سوراشتا قوللىنىلىدىغان ئەڭ مۇھىم جۈملە."
  },
  {
    id: 2,
    category: "ھۆرمەت ۋە ئىلتىپات",
    arabic: "تكرم عينك يا أخي، على راسي والله!",
    phonetic: "تىكرەم ئەينەك يا ئەخى، ئەلا راسى ۋەللاھ!",
    uyghur: "كۆزىڭىزگەپ بولسۇن قېرىندىشىم، بېشىم ئۈستىگە!",
    context: "بىر قېرىندىشىڭىز سىزدىن ياردەم سورىغاندا، سەمىمىيەت ۋە مەردلىك بىلەن قوبۇل قىلغانلىقنى بىلدۈرىدىغان ئېسىل ئىبارە."
  },
  {
    id: 3,
    category: "تەشەككۈر ۋە دۇئا",
    arabic: "جزاك الله خيراً، يسلمو إيديك ما قصرت.",
    phonetic: "جەزاكەللاھۇ خەيرەن، يىسلەمۇ ئىيدېك ما قەسسەرت.",
    uyghur: "ئاللاھ سىزگە ياخشىلىق ئاتا قىلسۇن، قولىڭىزغا دەرت كەلمىسۇن، كەم قىلمىدىڭىز.",
    context: "سىزگە ياخشىلىق قىلغان ياكى خىزمەت قىلغان كىشىگە سۈننەتكە ئۇيغۇن دۇئا قىلىش بىلەن بىللە سۈرىيە لەھجىسىدە رەھمەت ئېيتىش."
  },
  {
    id: 4,
    category: "كۈندىلىك تۇرمۇش",
    arabic: "شو عم تعمل هلأ؟ فاضي نحكي شوي؟",
    phonetic: "شۇ ئەم تەئمېل ھەللەئـ؟ فادى نىھكى شۋەي؟",
    uyghur: "ھازىر نېمە ئىش قىلىۋاتىسىز؟ بىردەم پاراڭلىشىشقا ۋاقتىڭىز بارمۇ؟",
    context: "سۈرىيە لەھجىسىدە «عم» ھازىرقى زاماننى، «هلأ» بولسا ھازىر دېگەن مەنىنى بىلدۈرىدۇ؛ دوستلار بىلەن ئالاقىدە كۆپ ئىشلىتىلىدۇ."
  },
  {
    id: 5,
    category: "خوشلىشىش ۋە تىلەك",
    arabic: "دير بالك ع حالك، أستودعك الله.",
    phonetic: "دىير بالەك ئە ھالەك، ئەستەۋدىئۇكەللاھ.",
    uyghur: "ئۆزىڭىزنى ئاسراڭ، سىزنى ئاللاھقا تاپشۇردۇم.",
    context: "سەپەرگە چىققاندا ياكى خوشلاشقاندا قارشى تەرەپنىڭ ئامانلىقىنى تىلەپ ئېيتىلىدىغان مەنىلىك سۆز."
  },

  // 2-گۇرۇپپا: ئىلىم، تىل ئۆگىنىش ۋە چۈشىنىش
  {
    id: 6,
    category: "تىل ئۆگىنىش",
    arabic: "احكي معي شوي شوي لو سمحت، عم أتعلم سوري.",
    phonetic: "ئىھكى مەئى شۋەي شۋەي لەۋ سەمەھت، ئەم ئەتەئەللەم سۇرى.",
    uyghur: "مۇمكىن بولسا مەن بىلەن ئاستا-ئاستا سۆزلىشىڭ، مەن سۈرىيە لەھجىسىنى ئۆگىنىۋاتىمەن.",
    context: "ئەرەب تىلىدا سۆزلەشكەندە قارشى تەرەپنىڭ ئېنىق ۋە ئاستا سۆزلىشىنى ئەدەپ بىلەن تەلەپ قىلىش جۈملىسى."
  },
  {
    id: 7,
    category: "ئايدىڭلاشتۇرۇش",
    arabic: "ما فهمت عليك منيح، فيك تعيد الكلمة؟",
    phonetic: "ما فىھىمت ئەلېك منىيھ، فىيك تئىيد ئىلكەلىمە؟",
    uyghur: "سۆزىڭىزنى ياخشى چۈشىنەلمىدىم، بۇ سۆزنى قايتا بىر دەپ بېرەلەمسىز؟",
    context: "سۆھبەت جەريانىدا ناتونۇش سۆز ئۇچرىغاندا تارتىنماستىن سوراپ ئۆگىنىۋېلىش ئۈچۈن ئىشلىتىلىدۇ."
  },
  {
    id: 8,
    category: "سەۋر ۋە تەسەللى",
    arabic: "طوّل بالك وتوكل على الله، كل شي بيصير خير.",
    phonetic: "تەۋۋىل بالەك ۋە تەۋەككەل ئەلەللاھ، كىل شى بىسىر خەير.",
    uyghur: "سەۋرچان بولۇڭ ۋە ئاللاھقا تەۋەككۈل قىلىڭ، ھەممە ئىش خەيرلىك بولۇپ كېتىدۇ.",
    context: "بىر قېرىندىشىڭىز قىيىنچىلىققا يولۇققاندا ئۇنىڭغا روھىي مەدەت ۋە ئىشەنچ بېغىشلايدىغان جۈملە."
  },
  {
    id: 9,
    category: "بازار ۋە ھالال سودا",
    arabic: "قديش حق هالكتاب؟ بدي ياه لو سمحت.",
    phonetic: "ئەددېش ھەئـ ھەلكىتاب؟ بىددى ياھ لەۋ سەمەھت.",
    uyghur: "بۇ كىتابنىڭ باھاسى قانچە پۇل؟ مۇمكىن بولسا مەن بۇنى ئالاتتىم.",
    context: "كىتابخانا ياكى بازاردا نەرسە-كېرەك سېتىۋالغاندا باھا سوراش ۋە ئېھتىياجنى ئىپادىلەش ئۇسۇلى."
  },
  {
    id: 10,
    category: "مېھماندوستلۇق",
    arabic: "أهلاً وسهلاً فيك، البيت بيتك تفضل!",
    phonetic: "ئەھلەن ۋە سەھلەن فىيك، ئىلبەيت بەيتەك تەفەددەل!",
    uyghur: "خۇش كەپسىز، قەدىمىڭىزگە مەرھابا، ئۆي ئۆزىڭىزنىڭ، قېنى مەرھەمەت!",
    context: "شەرقىي تۈركىستان ۋە شام دىيارى خەلقلىرىنىڭ ئورتاق گۈزەل مېھماندوستلۇق ئەنئەنىسىنى ئەكس ئەتتۈرىدىغان ئىبارە."
  },

  // 3-گۇرۇپپا: سەپەر، ياردەم ۋە كۈندىلىك ئالاقە
  {
    id: 11,
    category: "يول سوراش",
    arabic: "لو سمحت، وين أقرب جامع هون؟",
    phonetic: "لەۋ سەمەھت، ۋېن ئەئرەب جامىئـ ھون؟",
    uyghur: "خاپا بولماي دەپلا بېرىڭە، بۇ يەردىكى ئەڭ يېقىن مەسچىت قەيەردە؟",
    context: "سەپەر ئۈستىدە ياكى يېڭى بىر شەھەرگە بارغاندا ناماز ۋاقتىدا مەسچىت سوراش ئۈچۈن ئەڭ كۆپ لازىم بولىدىغان جۈملە."
  },
  {
    id: 12,
    category: "تائام ۋە بەرىكەت",
    arabic: "الأكل كتير طيب، صحتين وعافية ع قلبك.",
    phonetic: "ئىلئەكىل كتىر تەييىب، سەھتېن ۋە ئافىيە ئە قەلبەك.",
    uyghur: "تاماق ناھايىتى تەملىك بوپتۇ، سىزگە ئاش بولسۇن ۋە شىپا بولسۇن.",
    context: "تائام يەپ بولغاندىن كېيىن ساھىبخانغا ياكى ئاشپەزگە رەھمەت ئېيتىپ تىلەك بىلدۈرۈش."
  },
  {
    id: 13,
    category: "ئۆزرە ۋە ئەدەپ",
    arabic: "لا تواخذني يا غالي، تأخرت عليك شوي.",
    phonetic: "لا تۋاخىزنى يا غالى، تەئەخخەرت ئەلېك شۋەي.",
    uyghur: "مېنى ئەپۇ قىلىڭ قەدىردانىم، سىزگە ئازراق كېچىكىپ قالدىم.",
    context: "ۋەدىلەشكەن ۋاقىتتىن ئازراق كېچىككەندە ئەدەپ بىلەن كەچۈرۈم سوراش ئىبارىسى."
  },
  {
    id: 14,
    category: "ياردەم تەكلىپ قىلىش",
    arabic: "فيني ساعدك بشي؟ نحن إخوة ما في فرق.",
    phonetic: "فىينى سائىدەك بشى؟ نەھنۇ ئىخۋە ما فى فەرئـ.",
    uyghur: "سىزگە بىرەر ئىشتا ياردەم قىلايمۇ؟ بىز قېرىنداشلارمىز، ئارىمىزدا ياتلىق يوق.",
    context: "مۇھاجىرەتتە ياكى ئوقۇشتا قېرىنداشلارغا ياردەم قولىنى سۇنغاندا ئىشلىتىلىدىغان سەمىمىي سۆز."
  },
  {
    id: 15,
    category: "ئۇچرىشىش ۋە مەسلىھەت",
    arabic: "شو رأيك نلتقي بكرا بعد صلاة العصر؟",
    phonetic: "شۇ رەئيەك نىلتىئى بۇكرا بەئد سەلاتىل ئەسر؟",
    uyghur: "ئەتە ناماز ئەسىردىن كېيىن كۆرۈشسەك قانداق قارايسىز؟",
    context: "دوستلار بىلەن كۆرۈشۈش ۋاقتىنى بېكىتكەندە ئېنىق ۋە مۇۋاپىق ۋاقىت تاللاش جۈملىسى."
  }
];

const sentencesContainer = document.getElementById("sentencesContainer");
const lessonTitleLabel = document.getElementById("lessonTitleLabel");
const progressBarFill = document.getElementById("progressBarFill");
const progressCounterText = document.getElementById("progressCounterText");
const nextLessonBtn = document.getElementById("nextLessonBtn");
const todayLessonBtn = document.getElementById("todayLessonBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const detachWindowBtn = document.getElementById("detachWindowBtn");
const toastBanner = document.getElementById("toastBanner");

let masteredIds = {};
let currentGroupIndex = 0;

function computeTodayGroupIndex() {
  try {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
    const totalGroups = Math.floor(BILIG_SENTENCES.length / 5);
    return dayOfYear % totalGroups;
  } catch (err) {
    return 0;
  }
}

function showToastMessage(message) {
  try {
    if (!toastBanner) return;
    toastBanner.textContent = message;
    toastBanner.classList.add("visible");
    window.clearTimeout(toastBanner._timer);
    toastBanner._timer = window.setTimeout(() => {
      toastBanner.classList.remove("visible");
    }, 2200);
  } catch (err) {
    console.error("Toast error:", err);
  }
}

function speakPhraseAloud(text, langCode) {
  try {
    if (typeof chrome !== "undefined" && chrome.tts && typeof chrome.tts.speak === "function") {
      chrome.tts.stop();
      chrome.tts.speak(text, {
        lang: langCode,
        rate: 0.88,
        pitch: 1.0,
        onEvent: (event) => {
          if (event.type === "error") {
            fallbackWebSpeech(text, langCode);
          }
        }
      });
      showToastMessage(langCode.startsWith("ar") ? "🔊 ئەرەبچە ئوقۇلۇۋاتىدۇ..." : "🔊 ئۇيغۇرچە ئوقۇلۇۋاتىدۇ...");
      return;
    }
    fallbackWebSpeech(text, langCode);
  } catch (err) {
    fallbackWebSpeech(text, langCode);
  }
}

function fallbackWebSpeech(text, langCode) {
  try {
    if (!("speechSynthesis" in window)) {
      showToastMessage("⚠️ سىستېمىدا ئاۋاز ماتورى تېپىلمىدى");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const targetPrefix = langCode.slice(0, 2).toLowerCase();

    const matchedVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(targetPrefix));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
    utterance.lang = langCode;
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
    showToastMessage(langCode.startsWith("ar") ? "🔊 ئەرەبچە ئوقۇلۇۋاتىدۇ..." : "🔊 ئۇيغۇرچە ئوقۇلۇۋاتىدۇ...");
  } catch (err) {
    showToastMessage("⚠️ ئاۋازلىق ئوقۇشتا خاتالىق كۆرۈلدى");
  }
}

function generatePhraseAudioWavBlob(phraseItem) {
  const sampleRate = 22050;
  const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
  const noteDuration = 0.24;
  const totalSeconds = notes.length * noteDuration + 0.4;
  const numSamples = Math.floor(sampleRate * totalSeconds);
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  function writeAscii(offset, str) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  writeAscii(0, "RIFF");
  view.setUint32(4, 36 + numSamples * 2, true);
  writeAscii(8, "WAVE");
  writeAscii(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(36, "data");
  view.setUint32(40, numSamples * 2, true);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const noteIdx = Math.min(notes.length - 1, Math.floor(t / noteDuration));
    const localT = t - noteIdx * noteDuration;
    const freq = notes[noteIdx] + (phraseItem.id * 7);
    const envelope = Math.exp(-localT * 8.5) * Math.min(1, localT * 45);
    const sampleVal = Math.sin(2 * Math.PI * freq * t) * envelope * 0.42;
    const pcmValue = Math.max(-1, Math.min(1, sampleVal));
    view.setInt16(44 + i * 2, pcmValue * 32767, true);
  }

  return new Blob([buffer], { type: "audio/wav" });
}

async function sharePhraseWithAudio(phraseItem) {
  try {
    speakPhraseAloud(phraseItem.arabic, "ar-SY");

    const shareTitle = `بىلىگ - كۈندىلىك سۈرىيە ئەرەبچىسى ۋە ئۇيغۇرچە جۈملە (#${phraseItem.id})`;
    const shareText = [
      `📖 【بىلىگ ئەرەبچە ئۆگىنىش قىستۇرمىسى】`,
      `🔹 تۈرى: ${phraseItem.category}`,
      `🇸🇾 ئەرەبچە (سۈرىيە لەھجىسى): ${phraseItem.arabic}`,
      `🗣️ تەلەپپۇزى: ${phraseItem.phonetic}`,
      `🔹 ئۇيغۇرچە مەنىسى: ${phraseItem.uyghur}`,
      `💡 ئىزاھات: ${phraseItem.context}`
    ].join("\n");

    const wavBlob = generatePhraseAudioWavBlob(phraseItem);
    const audioFileName = `bilig-sentence-${phraseItem.id}.wav`;
    const audioFile = new File([wavBlob], audioFileName, { type: "audio/wav" });

    if (navigator.canShare && navigator.canShare({ files: [audioFile] })) {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        files: [audioFile]
      });
      showToastMessage("✅ تېكىست ۋە ئاۋاز ھۆججىتى ھەمبەھىرلەندى!");
      return;
    }

    triggerLocalAudioDownload(wavBlob, audioFileName);

    if (navigator.share) {
      await navigator.share({
        title: shareTitle,
        text: shareText
      });
      showToastMessage("✅ تېكىست ھەمبەھىرلەندى ۋە ئاۋاز ھۆججىتى چۈشۈرۈلدى!");
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(shareText);
    }
    showToastMessage("📥 جۈملە كۆچۈرۈلدى ۋە ئاۋاز ھۆججىتى (.wav) ساقلاندى!");
  } catch (err) {
    if (err && err.name === "AbortError") {
      return;
    }
    try {
      const fallbackText = `${phraseItem.arabic}\nئوقۇلۇشى: ${phraseItem.phonetic}\nمەنىسى: ${phraseItem.uyghur}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fallbackText);
      }
      showToastMessage("📋 جۈملە چاپلاش تاختىسىغا كۆچۈرۈلدى!");
    } catch (clipErr) {
      showToastMessage("⚠️ ھەمبەھىرلەشتە خاتالىق كۆرۈلدى");
    }
  }
}

function triggerLocalAudioDownload(blob, filename) {
  try {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 3000);
  } catch (err) {
    console.error("Audio download error:", err);
  }
}

function refreshProgressBar(currentSlice) {
  try {
    const doneCount = currentSlice.filter(item => Boolean(masteredIds[item.id])).length;
    const percentage = Math.round((doneCount / 5) * 100);
    if (progressBarFill) {
      progressBarFill.style.width = `${percentage}%`;
    }
    if (progressCounterText) {
      progressCounterText.textContent = `${doneCount} / 5 يادلاندى`;
    }
  } catch (err) {
    console.error("Progress update error:", err);
  }
}

function renderLessonGroup(groupIndex, isTodayGroup = true) {
  try {
    if (!sentencesContainer) return;
    const totalGroups = Math.floor(BILIG_SENTENCES.length / 5);
    const safeGroupIndex = ((groupIndex % totalGroups) + totalGroups) % totalGroups;
    const startOffset = safeGroupIndex * 5;
    const activeSentences = BILIG_SENTENCES.slice(startOffset, startOffset + 5);

    const todayIso = new Date().toISOString().slice(0, 10);
    if (lessonTitleLabel) {
      lessonTitleLabel.textContent = isTodayGroup
        ? `📅 بۈگۈنكى 5 جۈملە (${todayIso})`
        : `📚 تاللانما دەرس (${safeGroupIndex + 1}-بۆلۈم)`;
    }

    sentencesContainer.innerHTML = "";

    activeSentences.forEach((item, index) => {
      const isMastered = Boolean(masteredIds[item.id]);
      const cardEl = document.createElement("article");
      cardEl.className = `phrase-card${isMastered ? " mastered" : ""}`;

      cardEl.innerHTML = `
        <div class="card-header">
          <span class="topic-pill">${index + 1}-جۈملە • ${item.category}</span>
          <button type="button" class="master-btn${isMastered ? " active" : ""}">
            ${isMastered ? "✅ يادلىدىم" : "⭕ يادلاش"}
          </button>
        </div>
        <div class="arabic-line" dir="rtl">${item.arabic}</div>
        <div class="phonetic-line">🗣️ ئوقۇلۇشى: ${item.phonetic}</div>
        <div class="uyghur-meaning">🔹 مەنىسى: ${item.uyghur}</div>
        <p class="context-paragraph">${item.context}</p>
        <div class="card-toolbar">
          <button type="button" class="tool-btn btn-ar-tts" title="ئەرەبچىسىنى ئاۋازلىق ئوقۇتۇش">🔊 ئەرەبچە</button>
          <button type="button" class="tool-btn btn-ug-tts" title="ئۇيغۇرچىسىنى ئاۋازلىق ئوقۇتۇش">🔊 ئۇيغۇرچە</button>
          <button type="button" class="tool-btn btn-copy" title="تېكىستنى كۆچۈرۈش">📋 كۆچۈرۈش</button>
          <button type="button" class="tool-btn share-voice-btn btn-share" title="ئاۋاز ھۆججىتى ۋە تېكىستنى باشقا ئەپلەرگە ھەمبەھىرلەش">📤 ھەمبەھىر</button>
        </div>
      `;

      const masterBtn = cardEl.querySelector(".master-btn");
      const arTtsBtn = cardEl.querySelector(".btn-ar-tts");
      const ugTtsBtn = cardEl.querySelector(".btn-ug-tts");
      const copyBtn = cardEl.querySelector(".btn-copy");
      const shareBtn = cardEl.querySelector(".btn-share");

      if (masterBtn) {
        masterBtn.addEventListener("click", () => {
          try {
            masteredIds[item.id] = !masteredIds[item.id];
            saveLocalState({ masteredIds });
            renderLessonGroup(safeGroupIndex, isTodayGroup);
          } catch (err) {
            console.error(err);
          }
        });
      }

      if (arTtsBtn) {
        arTtsBtn.addEventListener("click", () => {
          speakPhraseAloud(item.arabic, "ar-SY");
        });
      }

      if (ugTtsBtn) {
        ugTtsBtn.addEventListener("click", () => {
          speakPhraseAloud(item.uyghur, "ug");
        });
      }

      if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
          try {
            const formatted = `${item.arabic}\nئوقۇلۇشى: ${item.phonetic}\nئۇيغۇرچە: ${item.uyghur}`;
            await navigator.clipboard.writeText(formatted);
            showToastMessage("📋 جۈملە كۆچۈرۈلدى!");
          } catch (err) {
            showToastMessage("⚠️ كۆچۈرۈشتە خاتالىق كۆرۈلدى");
          }
        });
      }

      if (shareBtn) {
        shareBtn.addEventListener("click", () => {
          sharePhraseWithAudio(item);
        });
      }

      sentencesContainer.appendChild(cardEl);
    });

    refreshProgressBar(activeSentences);
  } catch (err) {
    console.error("Render error:", err);
  }
}

function saveLocalState(dataObj) {
  try {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set(dataObj);
    } else {
      Object.keys(dataObj).forEach(k => {
        localStorage.setItem(k, JSON.stringify(dataObj[k]));
      });
    }
  } catch (err) {
    console.error("Storage save error:", err);
  }
}

function loadLocalState(callback) {
  try {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["masteredIds", "themeMode"], (res) => {
        callback(res || {});
      });
    } else {
      const masteredRaw = localStorage.getItem("masteredIds");
      const themeRaw = localStorage.getItem("themeMode");
      callback({
        masteredIds: masteredRaw ? JSON.parse(masteredRaw) : {},
        themeMode: themeRaw ? JSON.parse(themeRaw) : "dark"
      });
    }
  } catch (err) {
    callback({ masteredIds: {}, themeMode: "dark" });
  }
}

function initializeExtension() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("standalone") === "1") {
      document.body.classList.add("standalone-mode");
      if (detachWindowBtn) {
        detachWindowBtn.style.display = "none";
      }
    }

    currentGroupIndex = computeTodayGroupIndex();

    loadLocalState((state) => {
      masteredIds = state.masteredIds || {};
      const savedTheme = state.themeMode || "dark";
      document.body.setAttribute("data-theme", savedTheme);
      renderLessonGroup(currentGroupIndex, true);
    });

    if (nextLessonBtn) {
      nextLessonBtn.addEventListener("click", () => {
        const totalGroups = Math.floor(BILIG_SENTENCES.length / 5);
        currentGroupIndex = (currentGroupIndex + 1) % totalGroups;
        renderLessonGroup(currentGroupIndex, false);
      });
    }

    if (todayLessonBtn) {
      todayLessonBtn.addEventListener("click", () => {
        currentGroupIndex = computeTodayGroupIndex();
        renderLessonGroup(currentGroupIndex, true);
        showToastMessage("📅 بۈگۈنكى دەرسكە قايتتى");
      });
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", nextTheme);
        saveLocalState({ themeMode: nextTheme });
      });
    }

    if (detachWindowBtn) {
      detachWindowBtn.addEventListener("click", () => {
        try {
          const popupUrl = "popup.html?standalone=1";
          if (typeof chrome !== "undefined" && chrome.windows && chrome.windows.create) {
            chrome.windows.create({
              url: popupUrl,
              type: "popup",
              width: 410,
              height: 720
            });
          } else {
            window.open(popupUrl, "_blank", "width=410,height=720");
          }
        } catch (err) {
          window.open("popup.html?standalone=1", "_blank", "width=410,height=720");
        }
      });
    }
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

document.addEventListener("DOMContentLoaded", initializeExtension);
