---
uid: api.0c5efbcb258dfbcb23ed4622cf656d3ee47ad5d807994ee6673b3fec1ad5f339
symbol: "scripting:Inno.Core.Settings:M:InnoEngine.Settings.ProjectSettingComposer\u00602.Compose(\u00600,System.Collections.Generic.IReadOnlyList{InnoEngine.Settings.ProjectSettingContribution{\u00601}})"
source: xml
reviewed: bf30a1e35687a5a24526f7fb15697bf3544b755322a88d7679ad9bc43e8ee3b2
title: "ProjectSettingComposer\u003CTSetting, TContribution\u003E.Compose"
kind: api
owners: [Inno.Core.Settings]
apiSurface: editor-script
apiScope: Runtime
---

Composes dependency-ordered Plugin deltas and the optional final project delta into a host default.

## Parameters

**Parameter `target`:** The newly created host default to mutate into the effective value.

**Parameter `contributions`:** Decoded contributions in deterministic precedence order.
