import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, MenuItem, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export default function App() {
  const [date_time, setdate_time] = useState("");
  const [bytool, setbytool] = useState("");
  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [type, settype] = useState("");
  const [level, setlevel] = useState("");
  const [dept, setdept] = useState("");
  const [info, setinfo] = useState("");

  const formattedPhoneNumber = phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3"
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "95%" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box
            sx={{
              width: "80%",
              height: "auto",
              borderRadius: 4,
              bgcolor: "#f0f0f0",
              border: "2px solid gray",
              marginLeft: 5,
              marginTop: 3,
            }}
          >
            <Box sx={{ ml: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                  {!type ? <h2>ยังไม่ระบุหมวดหมู่</h2> : <h2>{type}</h2>}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mb: 1 }}>
                <h4 style={{ margin: 0 }}>
                  <img
                    src="https://i.pinimg.com/736x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: 10,
                    }}
                  />
                  {!fullname ? "-" : fullname}
                </h4>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mb: 1 }}>
                <h4 style={{ margin: 0, marginBottom: 15 }}>
                  <img
                    src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-phone-icon-png-image_5105607.jpg"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: 10,
                    }}
                  />
                  {!formattedPhoneNumber ? "-" : formattedPhoneNumber}
                </h4>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box component="form" noValidate sx={{ m: 3 }}>
            <h3>การรับเรื่อง</h3>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="วันที่ เวลา"></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  id="bytool"
                  label="ช่องทาง"
                  fullWidth
                  required
                  value={bytool}
                  onChange={(event) => {
                    setbytool(event.target.value);
                  }}
                >
                  <MenuItem value="ช่องทาง1">ช่องทาง1</MenuItem>
                  <MenuItem value="ช่องทาง2">ช่องทาง2</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <h3>ผู้แจ้งเรื่อง</h3>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="fullname"
                  label="ชื่อ และ นามสกุล"
                  value={fullname}
                  onChange={(event) => {
                    setfullname(event.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="phone"
                  label="เบอร์โทร"
                  fullWidth
                  required
                  value={formattedPhoneNumber}
                  onChange={(event) => {
                    setphone(event.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button
                  variant="outlined"
                  sx={{ width: "100%", height: "100%" }}
                >
                  ตรวจสอบ
                </Button>
              </Grid>
            </Grid>
            <h3>ข้อมูลที่แจ้ง</h3>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  required
                  id="type"
                  label="หมวดหมู่"
                  value={type}
                  onChange={(event) => {
                    settype(event.target.value);
                  }}
                >
                  <MenuItem value="หมวดหมู่1">หมวดหมู่1</MenuItem>
                  <MenuItem value="หมวดหมู่2">หมวดหมู่2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  required
                  id="level"
                  label="ระดับความสำคับ"
                  value={level}
                  onChange={(event) => {
                    setlevel(event.target.value);
                  }}
                >
                  <MenuItem value="ปกติ">ปกติ</MenuItem>
                  <MenuItem value="สำคัญมาก">สำคัญมาก</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  select
                  required
                  id="dept"
                  label="ฝ่ายที่เกี่ยวข้อง"
                  value={dept}
                  onChange={(event) => {
                    setdept(event.target.value);
                  }}
                >
                  <MenuItem value="ฝ่าย1">ฝ่าย1</MenuItem>
                  <MenuItem value="ฝ่าย2">ฝ่าย2</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  required
                  id="info"
                  label="รายละเอียด"
                  multiline
                  rows={5}
                  value={info}
                  onChange={(event) => {
                    setinfo(event.target.value);
                  }}
                ></TextField>
              </Grid>
            </Grid>

            <Box
              sx={{
                position: "sticky",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "#c3eefa",
                padding: 2,
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                size="large"
                startIcon={<SaveIcon />}
                // onClick={upShopInfo}
                // disabled={
                //   !shopName ||
                //   !shopAddress ||
                //   !phone ||
                //   window.sessionStorage.getItem("id_card") != id_card
                // }
              >
                บันทึก
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
