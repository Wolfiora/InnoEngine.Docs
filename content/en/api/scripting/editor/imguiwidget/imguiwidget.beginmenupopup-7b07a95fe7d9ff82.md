---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7b07a95fe7d9ff82fac46e9117d6c0711377590d59517c4f7c80e0456e226622
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginMenuPopup(System.String)
title: ImGuiWidget.BeginMenuPopup
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 057c0046eb016786490964aa3acefa6eb2a548a57253af9d299a90b19d360e46
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable identifier previously passed to ImGui when opening the popup.

## Returns

`true` when popup content should be submitted; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.
