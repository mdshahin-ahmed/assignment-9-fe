"use client";

import { useGetUsersQuery } from "@/redux/api/userApi";
import { formatDate } from "@/utils/formateDate";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Skeleton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import UserModal from "./components/UserModal";

export default function UserTable() {
  const { data, isLoading } = useGetUsersQuery("");
  const [open, setOpen] = React.useState(false);
  console.log(data);
  const [defaultValues, setDefaultValues] = React.useState({});

  return (
    <>
      <UserModal open={open} setOpen={setOpen} DefValues={defaultValues} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell width={120}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length > 0 && !isLoading ? (
              data?.map((user: any, index: number) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Box
                      className={`${
                        user.role === "ADMIN" ? "adminStyle" : "userStyle"
                      }`}
                    >
                      {user.role}
                    </Box>
                  </TableCell>
                  <TableCell>
                    {
                      <>
                        <FiberManualRecordIcon
                          className={`${
                            user.userStatus === "ACTIVATE"
                              ? "colorGreen cardIcon"
                              : "colorRed cardIcon"
                          }`}
                        />
                        {user.userStatus}
                      </>
                    }
                  </TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{formatDate(user.createdAt)}</TableCell>
                  <TableCell>
                    <Box
                      onClick={() => {
                        setDefaultValues({
                          ...defaultValues,
                          role: user.role,
                          userStatus: user.userStatus,
                          userId: user.id,
                        });
                        setOpen(true);
                      }}
                      sx={{
                        backgroundColor: "#ff0066",
                        alignSelf: "center",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        color: "white",
                        textAlign: "center",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      <EditIcon /> Edit
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                <TableRow>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rectangular" height={10} />
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
