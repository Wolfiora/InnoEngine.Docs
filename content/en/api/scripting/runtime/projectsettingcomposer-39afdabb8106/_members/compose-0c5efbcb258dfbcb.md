---
uid: api.0c5efbcb258dfbcb23ed4622cf656d3ee47ad5d807994ee6673b3fec1ad5f339
symbol: "scripting:Inno.Core.Settings:M:InnoEngine.Settings.ProjectSettingComposer\u00602.Compose(\u00600,System.Collections.Generic.IReadOnlyList{InnoEngine.Settings.ProjectSettingContribution{\u00601}})"
source: xml
reviewed: de8829073ae17732fc4b4fb63575a7e5b54503b4971eb59ed1b7634c805344dc
title: "Compose"
kind: api
owners: [Inno.Core.Settings]
apiSurface: editor-script
apiScope: Runtime
---

Composes dependency-ordered Plugin deltas and the optional final project delta into a host default.

**Parameter `target`:** The newly created host default to mutate into the effective value.

**Parameter `contributions`:** Decoded contributions in deterministic precedence order.
