---
uid: api.3da7855d6aad35e1aca5e00f2b6c7fd97636428451500cec321a2de5e8045f00
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.OnSuspensionChanged(System.Boolean)"
source: xml
reviewed: 108657ef1b9e6acb8f58b2ed17f1789e0cf5a4dc1143aee6be0f2ac3196f2137
title: "Shell.OnSuspensionChanged"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Receives an effective application suspension change at an event-pump safety point. Repeated notifications and changes that leave another suspension reason active do not invoke this hook.

## Parameters

**Parameter `isSuspended`:** Whether product frames and their clock are suspended after the change.
