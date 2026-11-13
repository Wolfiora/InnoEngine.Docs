---
uid: api.b1a4b37127f2722a0e950e1cef23c241ce0b3622562d391808458644294d6c6b
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyCompositionInputs(System.String,System.String)"
source: xml
reviewed: 9c4df3dd84fdd62c812bede761816e17eceb95a9cafb6c0b9a4315d2cccf49d2
title: "CopyCompositionInputs"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Stages shared registration generators and the checkout's actual SDK selection.

**Parameter `engineRoot`:** The selected complete source checkout.

**Parameter `playerDirectory`:** The isolated template input directory.

**Exception `T:System.IO.FileNotFoundException`:** A required built generator is absent.
