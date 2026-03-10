---
title: .NET Notes
---

# .NET Notes

## Convert String to Central Time

```C#
public static DateTime ToCentralTime(this string dateTimeString)
{
    TimeZoneInfo centralTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");
    return DateTime.TryParse(dateTimeString, out DateTime dt) ? TimeZoneInfo.ConvertTimeFromUtc(dt, centralTimeZone) : DateTime.MinValue;
}

public static DateTime ToCentralTime(this DateTimeOffset dateTime)
{
    TimeZoneInfo centralTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");
    return TimeZoneInfo.ConvertTime(dateTime, centralTimeZone).DateTime;
}
```

## System.Collections.Generic Interface Properties and Methods

|                  | IEnumerable | IEnumerable&lt;T&gt; | ICollection&lt;T&gt; | IList&lt;T&gt; |
| :---             | :---:       | :---:          | :---:          | :---:    |
| Current          |     X       |       X        |       X        |    X     |
| MoveNext()       |     X       |       X        |       X        |    X     |
| Reset()          |     X       |       X        |       X        |    X     |
| GetEnumerator()  |     X       |       X        |       X        |    X     |
| Count            |             |                |       X        |    X     |
| IsReadOnly       |             |                |       X        |    X     |
| Add(T)           |             |                |       X        |    X     |
| Clear()          |             |                |       X        |    X     |
| Contains(T)      |             |                |       X        |    X     |
| CopyTo(T[], idx) |             |                |       X        |    X     |
| Remove(T)        |             |                |       X        |    X     |
| this[idx]        |             |                |                |    X     |
| IndexOf(T)       |             |                |                |    X     |
| Insert(idx, T)   |             |                |                |    X     |
| RemoveAt(idx)    |             |                |                |    X     |
