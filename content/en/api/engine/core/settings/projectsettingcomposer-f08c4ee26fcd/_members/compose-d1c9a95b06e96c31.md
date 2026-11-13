---
uid: api.d1c9a95b06e96c31e08129539704a13b38c07ee7993ed2bcfbd6f3b2ddd4e6db
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingComposer\u00602.Compose(\u00600,System.Collections.Generic.IReadOnlyList{Inno.Core.Settings.ProjectSettingContribution{\u00601}})"
source: xml
reviewed: f46b9dd8eff6f8068cfb4fc05ce6793477cc1a0755844705cccc1cad7ab18ff6
title: "Compose"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Composes dependency-ordered Plugin deltas and the optional final project delta into a host default.

**Parameter `target`:** The newly created host default to mutate into the effective value.

**Parameter `contributions`:** Decoded contributions in deterministic precedence order.
