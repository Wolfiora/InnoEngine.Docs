---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.552185dd2fce1b463eabfacf8c5746b983e23d2a88c4416dea46581df525ade2
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.WrappedText(System.String,System.Single)
title: ImGuiWidget.WrappedText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 7dd102919f3786cb7819ff6ac9ab09b7a621953af9807885bea3d68fb1c14b98
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `text`:** The literal text captured for the current layout.

**Parameter `wrapWidth`:** The measured positive width in current presentation coordinates.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The text is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Exception `T:System.InvalidOperationException`:** The owning UI thread, frame or native context is not active.

**Exception `T:System.ObjectDisposedException`:** The owning UI session has retired.
