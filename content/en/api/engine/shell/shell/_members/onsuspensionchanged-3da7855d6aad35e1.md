---
uid: api.3da7855d6aad35e1aca5e00f2b6c7fd97636428451500cec321a2de5e8045f00
symbol: "engine:Inno.Shell:M:Inno.Shell.Shell.OnSuspensionChanged(System.Boolean)"
source: xml
reviewed: 90325f6d9bd09f45c7ec7dce0002b19d324526b41f08c3513f81a35a15913a2d
title: "OnSuspensionChanged"
kind: api
owners: [Inno.Shell]
apiSurface: source-clr
---

Receives an effective application suspension change at an event-pump safety point. Repeated notifications and changes that leave another suspension reason active do not invoke this hook.

**Parameter `isSuspended`:** Whether product frames and their clock are suspended after the change.
