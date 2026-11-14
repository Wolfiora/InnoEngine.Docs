---
uid: api.b1a4b37127f2722a0e950e1cef23c241ce0b3622562d391808458644294d6c6b
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyCompositionInputs(System.String,System.String)"
source: xml
reviewed: 071beac65bddbfed4e51542644295d0e808260386b64e3eeede39cf579e31859
title: "PlayerSupportPackFiles.CopyCompositionInputs"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Stages shared registration generators and the checkout's actual SDK selection.

## Parameters

**Parameter `engineRoot`:** The selected complete source checkout.

**Parameter `playerDirectory`:** The isolated template input directory.

## Exceptions

**Exception `T:System.IO.FileNotFoundException`:** A required built generator is absent.
