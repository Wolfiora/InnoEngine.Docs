---
uid: api.081eda4ce2b6f4b200917f42a4daac86b19612352dec90b9f8bf0647b2db9549
symbol: "engine:Inno.Editor.Settings:M:Inno.Editor.Settings.ProjectSettingPathAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: 4e24dbee4d993848f34bee6ab96950f11ce39362d38d807addf9658685f278dc
title: "ProjectSettingPathAttribute.Constructor"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: source-clr
---

Creates a project setting placement.

## Parameters

**Parameter `path`:** The slash-delimited field path beginning with `Project/`.

**Parameter `order`:** The stable order among fields in the same section.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `path` is outside the Project root or contains an empty segment.
