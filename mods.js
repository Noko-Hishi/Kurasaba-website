// ============================================================
//  くら鯖 Mod データ管理ファイル
//  新しいバージョンを追加するときはここにオブジェクトを追加するだけでOK
// ============================================================

const MOD_VERSIONS = [

  // ============================================================
  //  Ver.1 - 初期構成
  // ============================================================
  {
    id: "v1",
    label: "くら鯖 Mod Ver.1",
    minecraft: "1.20.1",
    loader: "Forge",
    totalMods: 90,
    description: "くら鯖の初期Mod構成です。工業・魔法・RPG・農業と幅広くバランスを取った構成です。",
    downloads: {
      prism:      "https://github.com/Noko-Hishi/Kurasaba-website/releases/download/minecraft/v1_prism.zip",
      modrinth:   "https://github.com/Noko-Hishi/Kurasaba-website/releases/download/minecraft/v1_modrinth.mrpack",
      curseforge: "https://github.com/Noko-Hishi/Kurasaba-website/releases/download/minecraft/v1_curse.zip",
      zip:        "https://github.com/Noko-Hishi/Kurasaba-website/releases/download/minecraft/v1_mods.zip",
    },
    categories: [

      // ---------- 自動化・工業 ----------
      {
        id: "industrial",
        icon: "⚙️",
        title: "自動化・工業",
        mods: [
          {
            icon: "🔩",
            name: "Create",
            desc: "歯車・ベルトコンベア・水車などの機械部品を組み合わせて自動化ラインを構築するMod。バニラに近いクラフトの延長で楽しめ、見た目にも動きのある工場が作れる。シャフトや回転数の概念があり、奥深い設計が可能。",
            addons: [
              { name: "Applied Create", desc: "CreateとApplied Energistics 2を連携させるAddon。Createの機構でAE2のネットワークに対してアイテムを自動投入・取り出しできるようになる。" },
              { name: "Create Jetpack + Curios", desc: "Createの素材を使ってジェットパックを作れるAddon。Curios連携で専用スロットに装備でき、インベントリを圧迫しない。" },
              { name: "TofuCreate", desc: "TofuCraftとCreateを連携させるAddon。豆腐素材でCreateのパーツを作れるようになる。" },
            ]
          },
          {
            icon: "⚗️",
            name: "Mekanism",
            desc: "大規模工業Mod。序盤から終盤まで段階的に進化する技術ツリーが用意されており、大規模な工場ラインを構築できる。",
            addons: [
              { name: "Mekanism Generators", desc: "太陽光パネル・風力発電機・核融合炉など多様な発電手段を追加するMod。Mekanismのエネルギー（Joules）を大量生産できる。" },
              { name: "Mekanism Tools", desc: "Mekanismの素材（オスミウム・精製黒曜石など）で作れる強力な武器・防具・ツールを追加。エネルギーで駆動するアイテムも含まれる。" },
              { name: "Mekanism Additions", desc: "プラスチックブロックや追加MOBなど、Mekanismの世界観を拡張するコンテンツを追加する。" },
              { name: "Mekanism Advanced Generators", desc: "先進型分裂炉、SPSを追加する。" },
              { name: "Mekanism Curios", desc: "MekanismのアイテムをCuriosの専用スロットで装備可能にするAddon。" },
            ]
          },
          {
            icon: "💾",
            name: "Applied Energistics 2",
            desc: "アイテムをデジタルデータとして管理する大規模ストレージシステム「MEネットワーク」を追加するMod。端末一つで数万種類のアイテムを検索・取り出し可能。自動クラフトシステムと組み合わせることで工場の全自動化が実現できる。（AE2よくわかんないからAI任せ、間違ってたらごめんｗ）",
            addons: [
              { name: "Advanced AE", desc: "AE2に高度な機能を追加するAddon。大容量ストレージセルや高機能な端末など、AE2をさらに強化するコンテンツが充実している。" },
              { name: "AE2 Omni Cells", desc: "アイテム・流体・エネルギーを一つのセルにまとめて格納できるAddon。管理の煩雑さを大幅に軽減する。" },
              { name: "AE2 QoL Recipes", desc: "AE2の一部クラフトレシピをより使いやすく調整するAddon。序盤の敷居を下げてくれる。" },
              { name: "AE2 Wireless Terminal Lib", desc: "AE2のワイヤレス端末を拡張するライブラリ。無線でMEネットワークに接続できる距離や機能を強化する。" },
              { name: "Applied Mekanistics", desc: "AE2とMekanismを連携させるAddon。Mekanismのガスや化学物質をAE2のネットワークで管理できるようになる。" },
              { name: "Applied Flux", desc: "AE2ネットワーク内でRF/FEエネルギーをストレージとして管理・送受信できるようにするAddon。" },
            ]
          },
          {
            icon: "📡",
            name: "RFToolsシリーズ",
            desc: "RF（エネルギー）を中心とした多機能な工業Modシリーズ。建築・制御・ディメンション生成・電力など幅広い分野をカバーする。",
            addonLabel: "モジュール",
            addons: [
              { name: "RFTools Base", desc: "RFToolsシリーズ共通の基盤ライブラリ。他のRFToolsモジュールを動かすために必要。" },
              { name: "RFTools Builder", desc: "指定した範囲を自動で建築・採掘できる多機能ビルダーMod。設計図を読み込んで自動建築する機能も持つ。" },
              { name: "RFTools Control", desc: "プログラムを組んで自動処理を作れる制御Mod。複雑な自動化ラインの分岐処理なども記述できる。" },
              { name: "RFTools Dimensions", desc: "独自のディメンション（異空間）を自分で生成・カスタマイズできるMod。素材で地形や環境を決定できる。" },
              { name: "RFTools Power", desc: "大容量のエネルギー貯蔵・送電システムを追加するMod。" },
              { name: "RFTools Utility", desc: "テレポーター・スクリーン・その他の便利なユーティリティツールを多数追加するMod。" },
            ]
          },
          {
            icon: "🏭",
            name: "Industrial Foregoing",
            desc: "植物の自動収穫・液体製造・MOBファームなど、多種多様な工業機械を追加するMod。主に鉱石無限化に使う。",
          },
          {
            icon: "🔌",
            name: "Integrated Dynamics",
            desc: "ネットワークを介してブロックの状態を読み取り、論理回路のように自動化を組める高度なMod。レッドストーンを超えた複雑な条件分岐処理が可能。...といいつつパイプが速度無限だからそれ目当てなだけ。",
            addons: [
              { name: "Integrated Tunnels", desc: "Integrated Dynamicsのネットワークでアイテム・液体・エネルギーを輸送するパイプシステムを追加するAddon。" },
            ]
          },
          {
            icon: "☀️",
            name: "Solar Flux Reborn",
            desc: "8種の太陽光パネルを追加するMod。日照時間にRFエネルギーを発電する。上位パネルほど発電量が大幅に増加する。",
            addons: [
              { name: "Applied Flux", desc: "AE2ネットワークでエネルギーを管理するAddon（Solar Flux Rebornとの連携にも活用できる）。" },
            ]
          },
          {
            icon: "⚡",
            name: "Mob Grinding Utils",
            desc: "MOBを効率よく処理してドロップを自動回収するための機械・ブロックを追加するMod。",
          },
          {
            icon: "📦",
            name: "Compacter",
            desc: "逆作業台？かな？使ったことないけど入れてる。",
          },
          {
            icon: "🌑",
            name: "Ender IO",
            desc: "導管（Conduit）でアイテム・液体・エネルギーを一本にまとめて輸送できる工業Mod。機械類も充実している。1.20で復活したの神ですね。",
          },
        ]
      },

      // ---------- 収納・ストレージ ----------
      {
        id: "storage",
        icon: "🎒",
        title: "収納・ストレージ",
        mods: [
          {
            icon: "🎒",
            name: "Sophisticated Backpacks",
            desc: "カスタマイズ可能なバックパックを追加するMod。素材ごとに容量が増えていくうえ、アップグレードでスタック数を増やせたり、バック内でクラフト、精錬、石切り、機織り...なんでもできる。",
            addons: [
              { name: "Sophisticated Backpacks Create Integration", desc: "Sophisticated BackpacksとCreateを連携させるAddon。Createのパーツを使ったバックパックのアップグレードが追加される。" },
            ]
          },
          {
            icon: "🗄️",
            name: "Sophisticated Storage",
            desc: "Sophisticated Backpacksのチェスト・樽バージョン。樽の色を変えることができるので建築勢も使ってみてね。",
          },
          {
            icon: "🗃️",
            name: "Storage Drawers",
            desc: "特定のアイテムを大量に収納できる引き出し型ストレージを追加するMod。前面に収納量が表示され、クリックで直接出し入れできるのが特徴。AE2と組み合わせて使うことが多い。",
          },
          {
            icon: "📫",
            name: "Iron Chest",
            desc: "鉄・金・ダイヤモンドなど様々な素材で作れる大容量チェストを追加するMod。バニラのチェストより多くのスロットを持ち、整理整頓に役立つ。",
          },
          {
            icon: "🧲",
            name: "Iron Shulker Box",
            desc: "Iron Chestと同様に様々な素材のシュルカーボックスを追加するMod。バニラより多いスロット数を持ち、大量の持ち運びが可能になる。",
          },
          {
            icon: "📥",
            name: "Storage Box",
            badge: "jp",
            desc: "同じアイテムを大量にまとめて入れられるアイテムを追加するMod。これがないとMineAllで死ぬ。",
            addons: {name: "Storage Box Adapter",desc: "StorageBox用の工業MODデバイスなどに繋げることができるアダプターを追加するMod",},
          },
          {
            icon: "🖥️",
            name: "Extended Terminal",
            desc: "Extended Terminalは、別のMODのクラフトターミナルを追加します。ってModページに書いてあった。使ったことない。",
          },
        ]
      },

      // ---------- 戦闘・魔法・RPG ----------
      {
        id: "combat",
        icon: "⚔️",
        title: "戦闘・魔法・RPG",
        mods: [
          {
            icon: "🥊",
            name: "Epic Fight",
            desc: "マインクラフトの戦闘システムをアクションRPG風に刷新するMod。武器ごとにコンボや特殊攻撃が追加され、ガード・回避の概念が生まれる。邪神が大好き",
            addons: [
              { name: "Epic Fight Invincible Lib", desc: "Epic Fightの無敵フレーム処理を拡張するライブラリ。他のModとの互換性を向上させる。" },
            ]
          },
          {
            icon: "🗡️",
            name: "Sword Soaring",
            desc: "Epic Fightと連携する剣技・空中コンボを追加するMod。空中での追撃や特殊な剣技が使えるようになり、戦闘の幅が広がる。邪神が大好き",
          },
          {
            icon: "⚔️",
            name: "Slash Blade Resharpened",
            desc: "抜刀剣のフォーク。居合いや払い斬りなど独自のアクションが搭載されていてとりあえず使い勝手がいい。",
          },
          {
            icon: "🏹",
            name: "SJAP Resharpened",
            desc: "Slash Blade Resharpenedの拡張Mod。追加の刀種類やスキルが収録されている。",
          },
          {
            icon: "✨",
            name: "Ars Nouveau",
            desc: "魔法の書に呪文を組み合わせることで、独自の魔法を自作できるMagic系Mod。飛行・召喚・属性攻撃など多彩な効果を組み合わせて強力な魔法を作れる。魔術入門にもってこいのMod。",
          },
          {
            icon: "🩸",
            name: "Blood Magic",
            desc: "自身のHPを血として捧げることで強力な魔法や儀式を行えるダークMagic系Mod。生命力（LP）を蓄えた祭壇を強化しながら進む独特の進行システムが特徴。",
          },
          {
            icon: "🔮",
            name: "Mahoutsukai (魔法使い)",
            desc: "和風・東洋風の魔法体験を提供するMagic系Mod。独自の魔法システムと武器・防具が追加され、Ars NouveauやBlood Magicとは異なる方向性の魔法プレイができる。",
          },
          {
            icon: "😈",
            name: "Sons of Sins",
            desc: "七大罪をテーマにした強力なボスやモンスターを追加するMod。それぞれのボスが固有の攻撃パターンを持ち、やりごたえのある戦闘が楽しめる。",
          },
          {
            icon: "👹",
            name: "Infernal Mobs",
            desc: "一部のMOBがランダムに強化されてエリートMOBとして出現するMod。特殊な能力（テレポート・分裂・高速移動など）を持ち、割とうざい。結構めんどい。かなりだるい。特にエンドとかネザー要塞とか...",
          },
        ]
      },

      // ---------- 探索・ディメンション ----------
      {
        id: "exploration",
        icon: "🌍",
        title: "探索・ディメンション",
        mods: [
          {
            icon: "🌑",
            name: "Deeper Darker",
            desc: "ディープダークバイオームをさらに拡張するMod。新しいブロック・構造物・アイテムが追加され、スカルクの探索がより楽しくなる。",
          },
          {
            icon: "🚀",
            name: "Beyond Earth",
            desc: "ロケットを作って月・火星などの惑星へ探索に行けるSF系Mod。各惑星に独自の環境・資源・敵MOBが存在し、宇宙開発のロマンが味わえる（1.20.1対応のプレリリース版）。",
          },
          {
            icon: "🌌",
            name: "Voidscape",
            desc: "岩盤の上に長く留まり、暗く狂気に満ちた異次元へと吸い込まれてしまえ。",
          },
          {
            icon: "👺",
            name: "Goblin Traders",
            desc: "地下や森にゴブリン商人が出現するMod。ユニークなアイテムを取引でき、旅の途中で思わぬ掘り出し物が見つかることも。",
          },
          {
            icon: "🗿",
            name: "Waystones",
            desc: "ワープポイント（ウェイストーン）を設置・登録することで、そこへ瞬時に移動できるMod。コストも軽くてめっちゃ便利。",
          },
        ]
      },

      // ---------- 食べ物・農業 ----------
      {
        id: "food",
        icon: "🍳",
        title: "食べ物・農業",
        mods: [
          {
            icon: "🌾",
            name: "Farmer's Delight",
            desc: "農業と料理を大幅に拡張するMod。新しい作物・食材・調理台が追加され、様々な料理を作れるようになる。",
          },
          {
            icon: "🎣",
            name: "Aquaculture 2",
            desc: "釣りを大幅に拡張するMod。80種類以上の魚・釣り道具・特殊アイテムが追加され、釣りがひとつのコンテンツとして楽しめるようになる。",
            addons: [
              { name: "Aquaculture Delight", desc: "AquacultureとFarmer's Delightを連携させるAddon。釣れた魚をFarmer's Delightの調理台で料理できるようになる。" },
            ]
          },
          {
            icon: "🍽️",
            name: "Cooking for Blockheads",
            desc: "キッチンカウンター・冷蔵庫・オーブンなどのブロックを追加し、料理の自動化・管理を簡単にするMod。Farmer's Delightと組み合わせると豪華なキッチンが作れる。（sinkを工業で無限水源として使いたいだけ）",
          },
          {
            icon: "⬜",
            name: "TofuCraft Reload",
            badge: "jp",
            desc: "豆腐を素材としたブロック・食料・武器・防具を追加するユニークなMod。すごい人は豆腐で工場作る... 日本発の人気Modの1.20.1対応版。",
            addons: [
              { name: "TofuCreate", desc: "TofuCraftとCreateを連携させるAddon。豆腐素材でCreateのパーツを作れるようになる。" },
              { name: "Tofu Delight", desc: "TofuCraftとFarmer's Delightを連携させるAddon。豆腐を使った新しい料理レシピが追加される。" },
            ]
          },
        ]
      },

      // ---------- 建築・利便性 ----------
      {
        id: "utility",
        icon: "🏗️",
        title: "建築・利便性",
        mods: [
          {
            icon: "🛗",
            name: "Elevator ID",
            desc: "その名の通りエレベーターを追加する。同じXZで高さを変えて置いてあげるとジャンプ・スニークで移動できる。便利。",
          },
          {
            icon: "🛏️",
            name: "Comforts",
            desc: "ハンモックと寝袋を追加するMod。寝袋はリス地を変えずに朝にできるから重宝してる。ハンモックは昼をスキップできる。",
          },
          {
            icon: "🏮",
            name: "Arcane Lanterns",
            desc: "様々な効果を持つランタンを追加する。デザイン性もよきよき。青炎さん、ライフランタンとか使えそうじゃないですか？",
          },
          {
            icon: "🛡️",
            name: "New Shield Variants",
            desc: "様々な素材で作れる新しい盾を追加するMod。素材によって防御性能が異なり、ファッション性も高い。",
          },
          {
            icon: "🪦",
            name: "Gravestone",
            desc: "死亡時にアイテムをその場に散らかさず、墓石にまとめてくれるMod。墓石を壊すとアイテムを全回収できる。",
          },
        ]
      },

      // ---------- QoL・ゲームプレイ改善 ----------
      {
        id: "qol",
        icon: "🔧",
        title: "QoL・ゲームプレイ改善",
        mods: [
          {
            icon: "📖",
            name: "Just Enough Items (JEI)",
            desc: "すべてのアイテムのクラフトレシピ・使用用途を画面右側に一覧表示するMod。レシピをゲーム内で調べられる。最初にインベントリを開くと激重なのはこいつのせい。",
            addons: [
              { name: "Just Enough Resources (JER)", desc: "JEIにMOBのドロップ一覧・鉱石の生成高度などの情報を追加するAddon。どのMOBから何がドロップするかをJEIから確認できる。" },
            ]
          },
          {
            icon: "🔍",
            name: "Jade",
            desc: "カーソルを向けたブロック・MOBの情報を画面に表示するMod（Wailaの後継）。機械の動作状態・在庫・エネルギー量なども確認できる。",
            addons: [
              { name: "Jade Addons", desc: "Jadeに対応Modを増やすAddon。より多くのModのブロック情報がJadeで表示されるようになる。気体とか液体とかね。" },
            ]
          },
          {
            icon: "⛏️",
            name: "CutAll / DigAll / MineAll SMP",
            badge: "jp",
            desc: "木を1ブロック壊すと丸ごと伐採（CutAll）、土系ブロックを一括掘削（DigAll）、鉱石を連鎖採掘（MineAll）できるMod群。DigAll誤爆注意！！",
          },
          {
            icon: "🧲",
            name: "PickupWidely SMP",
            badge: "jp",
            desc: "周辺に落ちているアイテムを広範囲で自動回収できるようにするMod。採掘や戦闘後のドロップ拾いが格段に楽になる。サーバー対応のSMP版。",
          },
          {
            icon: "🎯",
            name: "Get It Together Drops",
            desc: "地面に落ちたアイテムを近くの同種アイテムと自動でまとめるMod。大量ドロップ時のTPS低下を防ぎ、サーバーのパフォーマンス改善にも貢献する。",
          },
          {
            icon: "✨",
            name: "Clumps",
            desc: "経験値オーブを周辺のものとまとめて大きな塊にするMod。経験値エンティティが減ることでサーバーのTPS低下を防ぐ。EXPオーブが纏わりつくことなく身体に入ってくれるのも何気に神。",
          },
          {
            icon: "🪂",
            name: "Elytra Slot",
            desc: "エリトラを胸部スロットとは別の専用スロットに装備できるようにするMod。鎧を着たままエリトラを使えるようになり、防御と移動を両立できる。",
          },
          {
            icon: "",
            name: "見逃してるMod",
            desc:"記載されていないModで説明載せて置いてほしいのがあればcl_nokoにDMください！"
          }
        ]
      },

    ] // end categories
  }, // end v1


  // ============================================================
  //  Ver.2 を追加する場合はここにコピペして編集するだけ！
  // ============================================================
  // {
  //   id: "v2",
  //   label: "くら鯖 Mod Ver.2",
  //   minecraft: "1.20.1",
  //   loader: "Forge",
  //   totalMods: 95,
  //   description: "Ver.2の説明をここに書く。",
  //   downloadUrl: "#",
  //   categories: [ ... ]
  // },

]; // end MOD_VERSIONS