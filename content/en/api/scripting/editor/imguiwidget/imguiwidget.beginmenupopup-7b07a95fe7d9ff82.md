---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7b07a95fe7d9ff82fac46e9117d6c0711377590d59517c4f7c80e0456e226622
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginMenuPopup(System.String)
title: ImGuiWidget.BeginMenuPopup
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 3ac349b3c3e4bef1c42dc0b84927b5d883b8bf30feb187354166446e90245793
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
