---
uid: api.72eabaa52bafb7b53f6cb1f5b858919b1abd74ab1f9a0b408dabb547e815016f
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator.Validate(System.String)"
source: xml
reviewed: ad50eda3d958339238d7e529905a142e6909a17e24118fb2fd41b7f0948e3c0f
title: "Validate"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Rejects incomplete or foreign platform inputs in the supplied Support Pack.

**Parameter `directory`:** The isolated or installed target directory to validate.

**Exception `T:System.IO.InvalidDataException`:** A required input is absent or the closure contains a foreign native binary.
