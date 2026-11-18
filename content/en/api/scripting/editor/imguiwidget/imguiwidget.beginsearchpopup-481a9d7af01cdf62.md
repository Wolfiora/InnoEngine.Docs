---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.481a9d7af01cdf625b0c87be43a2fa3f15ba3c909333bc3778065b621e94357f
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single)
title: ImGuiWidget.BeginSearchPopup
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 9de20eda34f6d22d3082502ba268f7e09e949f089776314d8df79e8ecc12262f
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

## Returns

`true` when popup content should be drawn; otherwise, `false`.
