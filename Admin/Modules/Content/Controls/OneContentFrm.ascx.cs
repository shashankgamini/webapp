using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using SMAC;

public partial class Admin_Modules_Content_Controls_NewsFrm : System.Web.UI.UserControl
{
    public string sRootAppPath = "../../";
    public string act, cid, id, TopicID;
    protected void Page_Load(object sender, EventArgs e)
    {
        TopicID = Request["TopicID"];
        act = Request["act"];
        id = Request["id"];        
        if (!IsPostBack)
        {
            this.bindToDropDown(ddlModID);
            if (act == "edit")
                ViewEdit(id);
            if (act == "add")
            {                
                for (int i = 0; i < ddlModID.Items.Count; i++)
                {
                    if (TopicID == ddlModID.Items[i].Value)
                        ddlModID.Items[i].Selected = true;
                }
            }
            if (Session["Admin"].ToString() != "admin")
            {
                cbIsUse.Enabled = false;
            }
        }
    }
    public void bindToDropDown(DropDownList ddl)
    {
        string sql = "SELECT Mod_ID,Mod_Parent,Mod_Name,Mod_Level FROM tbl_Mod WHERE lang=" + Session["lang"];
        sql += " AND Mod_ID in(SELECT Mod_ID FROM tbl_ModsiteUser WHERE User_ID=" + Session["UserID"] + ") ORDER BY Mod_Pos";
        DataSet ds = UpdateData.UpdateBySql(sql);
        DataRowCollection rows = ds.Tables[0].Rows;
        for (int i = 0; i < rows.Count; i++)
        {
            if (rows[i]["Mod_Parent"].ToString() == "0")
            {
                ListItem item = new ListItem();
                item.Text = rows[i]["Mod_Name"].ToString();
                item.Value = rows[i]["Mod_ID"].ToString();
                ddl.Items.Add(item);
                ddl.Attributes.Add("style", "color:#FF3300");
                GetChildItems(rows[i]["Mod_ID"].ToString(), ds, ddl);
            }
        }
    }
    private void GetChildItems(string parentID, DataSet dtTemp, DropDownList ddl)
    {
        DataRowCollection rows = dtTemp.Tables[0].Rows;
        for (int i = 0; i < rows.Count; i++)
        {
            string child = "";
            if (rows[i]["Mod_Parent"].ToString() == parentID.ToString())
            {
                for (int j = 0; j < Convert.ToInt32(rows[i]["Mod_Level"]); j++)
                {
                    child = child + "--";
                }
                ListItem chilitem = new ListItem();
                if (Convert.ToInt32(rows[i]["Mod_Parent"]) != 0)
                    chilitem.Attributes.Add("style", "color:#000");
                chilitem.Text = child + rows[i]["Mod_Name"].ToString();
                chilitem.Value = rows[i]["Mod_ID"].ToString();

                ddl.Items.Add(chilitem);
                GetChildItems(rows[i]["Mod_ID"].ToString(), dtTemp, ddl);
            }
        }
    }
    public void ViewEdit(string id)
    {
        string sql = "SELECT * FROM tbl_Content WHERE Content_ID=" + id;
        DataSet ds = UpdateData.UpdateBySql(sql);
        DataRowCollection rows = ds.Tables[0].Rows;          
        if (rows.Count > 0)
        {
            txtName.Text        = rows[0]["Content_Name"].ToString();
            CKContent.Text      = rows[0]["Content_Text"].ToString();            
            txtImg.Text         = rows[0]["Content_Img"].ToString();
            txtURL.Text         = rows[0]["Content_URL"].ToString();
            txtPos.Text         = rows[0]["Content_Pos"].ToString();
            txtKey.Text = rows[0]["Content_Key"].ToString();
            txtTitle.Text = rows[0]["Content_Title"].ToString();
            txtMeta.Text = rows[0]["Content_Des"].ToString();
            //txtTag.Text = rows[0]["Content_Tag"].ToString();
            cbIsUse.Checked = (Convert.ToBoolean(rows[0]["Content_Status"]) == true) ? true : false;
            for (int i = 0; i < ddlModID.Items.Count; i++)
            {
                if (rows[0]["Mod_ID"].ToString() == ddlModID.Items[i].Value)
                {
                    ddlModID.Items[i].Selected = true;
                }
            }           
        }
    }
    protected void lbtUpdate_Click(object sender, EventArgs e)
    {
        string sScritp = "<script>";
        sScritp += "var b = opener.parent.dhxLayout.cells(\"b\");";
        sScritp += "b.attachURL(\"ContentList.aspx?TopicID=" + ddlModID.SelectedValue + "\");";
        sScritp += "window.close();";
        sScritp += "</script>";

        //string sql = "SELECT Tag_Url FROM tbl_Tag";
        //DataSet dsSQL = UpdateData.UpdateBySql(sql);
        //DataRowCollection rowsSQL = dsSQL.Tables[0].Rows;
        //ArrayList arrSQL = FunctionDB.GetRowAsArrayList(dsSQL, "Tag_Url");

        ////DataSet dsM = UpdateData.UpdateBySql("SELECT MAX(Content_ID) AS maxID FROM tbl_Content");
        ////DataRowCollection rowsM = dsM.Tables[0].Rows;
        ////int maxID = Convert.ToInt32(rowsM[0]["maxID"].ToString())+1;

        //string[] mID = txtTag.Text.Split(',');

        //for (int i = 0; i < mID.Length; i++)
        //{
        //    if (mID[i] != "")
        //    {
        //        string nTag = mID[i].ToString().Trim();
        //        string uTag = ApplicationUtil.GetTitle(mID[i].ToString().Trim());
        //        Hashtable tbTag = new Hashtable();
        //        //if (act == "add")
        //        //    tbTag.Add("Content_ID", maxID.ToString());
        //        tbTag.Add("Tag_Name", nTag);
        //        tbTag.Add("Tag_Url", uTag);
        //        if (arrSQL.Contains(uTag))
        //        {
        //            UpdateData.Update("tbl_Tag", tbTag, "Tag_Url='" + uTag + "'");
        //            UpdateData.UpdateBySql("UPDATE tbl_Tag SET Tag_Count=Tag_Count+1 WHERE Tag_Url='" + uTag + "'");
        //        }
        //        else
        //        {
        //            UpdateData.Insert("tbl_Tag", tbTag);
        //            arrSQL = FunctionDB.GetRowAsArrayList(dsSQL, "Tag_Url");
        //        }
        //    }
        //}
        string url = txtURL.Text.Trim() == "" ? ApplicationUtil.GetTitle(txtName.Text.ToString()).ToLower() : txtURL.Text.Trim().ToLower();
        string title = txtTitle.Text.Trim() == "" ? txtName.Text.ToString() : txtTitle.Text.Trim();
        //string urlTag = txtTag.Text.Trim() == "" ? ApplicationUtil.GetTitle(txtKey.Text.ToString()).ToLower() : ApplicationUtil.GetTitle(txtTag.Text.Trim()).ToLower();
        Hashtable tbIn = new Hashtable();
        string isUse = (cbIsUse.Checked == true) ? "1" : "0";
        tbIn.Add("Mod_ID", ddlModID.SelectedValue);
        tbIn.Add("User_ID", Session["UserID"].ToString());
        tbIn.Add("Content_Name", txtName.Text);
        tbIn.Add("Content_Text", CKContent.Text);
        tbIn.Add("Content_Img", txtImg.Text.Replace("/upload", "upload"));
        //tbIn.Add("Content_URL", txtURL.Text);
        tbIn.Add("Content_Pos", txtPos.Text);
        tbIn.Add("Content_Status", isUse);
        tbIn.Add("Content_URL", url);
        tbIn.Add("Content_Title", title);
        tbIn.Add("Content_Key", txtKey.Text);
        tbIn.Add("Content_Des", txtMeta.Text);
        //tbIn.Add("Content_Tag", txtTag.Text);
        //tbIn.Add("Content_UrlTags", urlTag);
        if (act == "add")
        {
            tbIn.Add("lang", Session["lang"].ToString());
            bool _insert = UpdateData.Insert("tbl_Content", tbIn);
            if(_insert)
                FunctionDB.AddLog(Session["DepartID"].ToString(), Session["Username"].ToString(), "Thêm ", "Bài: " + txtName.Text);
        }
        if (act == "edit")
        {
            bool _update = UpdateData.Update("tbl_Content", tbIn, "Content_ID=" + id);
            if(_update)
                FunctionDB.AddLog(Session["DepartID"].ToString(), Session["Username"].ToString(), "Sửa", "Bài: " + txtName.Text);
        }        
        Response.Write(sScritp);
    }
}
